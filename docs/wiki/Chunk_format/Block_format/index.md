!!! info
    This page is a work in progress

# Block format

Block data is in **Big Endian** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| BlockMigrationVersion | 4 | Only exists if version is 6 or above |
| PaletteType | 1 | The palette type.<br>May be: 0 = `Empty`, 1 = `Half Byte`, 2 = `Byte`, or 3 = `Short` |
| BlockCount | 2 | Number of blocks in the palette |
| BlockPalette | *BlockCount* | The blocks in the palette. See below |
| Blocks | 32768 of *PaletteType* | the blocks as palette indexes. (Low-nibble-first packing if *PaletteType* is 1) |
| TickingBlockCount | 2 | Unknown |
| TickingBlockDataSize | 2 | Unknown |
| TickingBlockData | *TickingBlockDataSize* × 8 | Unknown |
| FillerPaletteType | 1 | The filler palette type.<br>May be: 0 = `Empty`, 1 = `Half Byte`, 2 = `Byte`, or 3 = `Short` |
| FillerBlockCount | 2 | Number of filler blocks in the palette |
| FillerBlockPalette | *FillerBlockCount* | The filler block data in the palette. See below |
| FillerBlocks | 32768 of *FillerPaletteType* | The filler blocks as palette indexes. (Low-nibble-first packing if *FillerPaletteType* is 1) |
| RotationPaletteType | 1 | The rotation palette type.<br>May be: 0 = `Empty`, 1 = `Half Byte`, 2 = `Byte`, or 3 = `Short` |
| RotationBlockCount | 1 | Number of rotation blocks in the palette |
| RotationBlockPalette | *RotationBlockCount* | The rotation block data in the palette. See below |
| RotationBlocks | 32768 of *RotationPaletteType* | The rotation blocks as palette indexes. (Low-nibble-first packing if *RotationPaletteType* is 1) |
| LocalLight | *Variable* | The local light data. See below |
| GlobalLight | *Variable* | The global light data. See below |
| LocalChangeCounter | 2 | 16-bit Identifier, identifying the current state of the local light data. |
| GlobalChangeCounter | 2 | 16-bit Identifier, identifying the current state of the global light data. |

</div>

**BlockPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| BlockIdLength | 2 | The length of the block id. |
| BlockId | *BlockIdLength* | The block id. |
| Count | 2 | How many of this block exist in this section. |

</div>

**FillerBlockPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| FillerBlockData | 2 | The filler block data. |
| Count | 2 | How many of this block exist in this section. |

</div>

**RotationBlockPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| RotationDataValue | 1 | The blocks rotation data value. |
| Count | 2 | How many of this block exist in this section. |

</div>

**LocalLight** & **GlobalLight**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| ChangeId | 2 | Change counter identifier, identifying the current state of the light data blob. |
| HasLight | 1 (boolean) | `true` if light data is present. |
| LightLength | 4 | The total size in bytes of the octree. |
| LightData | *LightLength* | An implicit pointer-based octree of light data. See [Octree structure](./Block_format/Octree_structure.md) |

</div>

## Block layout

Block positions are ordered YZX for compression purposes.

The coordinate system is as follows:

* **X** increases East, decreases West
* **Y** increases upward, decreases downward
* **Z** increases South, decreases North

This means indices are ordered like in a book, with its top to the North, read from beneath and with words written backward: each letter is a different X-index, each line a Z-index, and each page a Y-index. In case of a flat 2D array, the Y-index is omitted, and the array reads like a single page.

Each section is a 32×32×32-block area, with up to 10 sections in a chunk : from 0 at the bottom, to 31 on top. Empty sections are not saved. Each section has a "Palette" list linking the palette indices to block IDs.

The pseudo-code below shows how to access individual block IDs from a single section.

```cpp
short getBlock(byte[] arr, int index, byte paletteType) {
    if (paletteType == 1) {
        return (short) (index%2 == 0 ? arr[index/2]&0x0F : (arr[index/2]>>4)&0x0F);
    } else if (paletteType == 2) {
        return (short) arr[index];
    } else if (paletteType == 3) {
        return (short) (arr[index*2] | (arr[index*2+1]<<8));
    } else {
        return -1;
    }
}
int BlockPos = y*32*32 + z*32 + x;
string BlockName = Palette[getBlock(Blocks, BlockPos, PaletteType)];
```
