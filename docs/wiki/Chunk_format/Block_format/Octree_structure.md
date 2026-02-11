!!! note
    This page was mostly made by ChatGPT after being given code snippets for deserializing the light data octree and told to make a markdown document of it.

# Octree Structure (Light Data format)

The `LightData` field stores light values using an **octree** to efficiently compress large uniform regions.

An octree recursively subdivides a cubic volume into **8 equally sized sub-volumes (octants)**.
Each octree node represents a region of space that is either:

* a **leaf**, storing a single light value for the entire region, or
* an **internal node**, subdividing the region into 8 child octants

This allows large areas with identical light values to be stored compactly, while preserving detail where light varies.

## Node layout

Each octree node is stored as a fixed-size **17-byte structure**:

<div markdown="1" id="table">

| Offset | Size | Description |
|--------|------|-------------|
| 0 | 1 byte | Child mask |
| 1–16 | 16 bytes | 8 child entries (2 bytes each) |

</div>

Nodes are stored sequentially in a flat array and are referenced by **index**, not by pointer.

Child references are stored as 16-bit node indices, limiting the octree to at most 65,535 nodes.

## Child mask

The child mask is an 8-bit bitfield, with one bit per octant (child index `0–7`):

* Bit value `0` -> the child is a **leaf**
* Bit value `1` -> the child is a **subtree**

The ordering of the octants is fixed and consistent throughout the structure (see Octant mapping below).

Example:

`0b00001010`

<div markdown="1" id="table">

| Child index | Mask bit | Meaning |
|-------------|----------|---------|
| 0 | 0 | Leaf value |
| 1 | 1 | Subtree |
| 2 | 0 | Leaf value |
| 3 | 1 | Subtree |
| 4–7 | 0 | Leaf values |

</div>

## Child entries

Each of the 8 child entries is a **16-bit value** whose meaning depends on the corresponding mask bit:

* If the mask bit is `0` -> the entry is a **literal light value** for that entire octant
* If the mask bit is `1` -> the entry is an **index** of another octree node within the flat node array

## Storage model

Although conceptually a tree, the octree is stored as a **flat list of nodes**:

* Node index 0 is always the root node.
* Nodes are allocated sequentially as the data is deserialized
* Child references are indices into this list
* The tree is serialized in **depth-first order**

Conceptually:

<div markdown="1" id="treeview">

* Node 0 (root)
    * child 0 -> value
    * child 1 -> Node 1
        * child 0 -> value
        * child 3 -> Node 2
    * child 2 -> value

</div>

The octree represents the same 32×32×32 block space as the section data.
The following describes how block coordinates map to octree child indices.

### Octant mapping

At each level of the octree, the child octant is selected using three bits of the linear block index.

The linear index is laid out in YZX order:

`index = y*32*32 + z*32 + x`

For a given depth, the octant index is computed as:

`octant = (index >> (12 - depth)) & 7`

This corresponds to the following bit layout:

<div markdown="1" id="table">

| Bit | Axis |
|-----|------|
| bit 2 (value 4) | Y |
| bit 1 (value 2) | Z |
| bit 0 (value 1) | X |

</div>

Thus, the octant index is:

`octant = (yBit << 2) | (zBit << 1) | xBit`

The octree has 5 levels, subdividing the 32×32×32 block space down to individual blocks.

### Light channels

Each light value is a 16-bit integer composed of four 4-bit channels:

<div markdown="1" id="table">

| Channel | Bits | Description |
|---------|------|-------------|
| 0 | 0–3 | Red |
| 1 | 4–7 | Green |
| 2 | 8–11 | Blue |
| 3 | 12–15 | Unknown / reserved |

</div>

Each channel has a value range of 0–15.

The effective block light intensity used by the engine is computed as the maximum of the red, green, and blue channel values.

## Deserialization algorithm (pseudocode)

The following pseudocode illustrates how the octree is reconstructed:

```cs
Node readNode() {
    mask = readByte();
    node = new Node(mask);

    for (child_idx in 0..7) {
        if (mask bit is 1) {
            index = allocateNewNode();
            node.children[child_idx] = index;
            readNode(); // recurse
        } else {
            node.children[child_idx] = readShort();
        }
    }
    return node;
}
```

The first node read is the **root node** of the octree.

## Light value resolution

To resolve the light value at a specific position:

1. Start at the root node
2. Determine which octant contains the position
3. If the child entry is a value, return it
4. If the child entry is a subtree, repeat for that node

This process continues until a leaf value is reached.
