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
| Blocks | 32768 of *PaletteType* | the blocks as palette indexes. (Low-nibble-first packing) |
| TickingBlockCount | 2 | Unknown |
| TickingBlockDataSize | 2 | Unknown |
| TickingBlockData | *TickingBlockDataSize* * 8 | Unknown |
| FillerPaletteType | 1 | The filler palette type. |
| FillerBlockCount | 2 | |
| FillerBlockPalette | *FillerBlockCount* | |
| FillerBlocks | | |
| RotationPaletteType | 1 | The rotation palette type. |
| RotationBlockCount | 1 | |
| RotationBlockPalette | *RotationBlockCount* | |
| RotationBlocks | | |
| LocalLight | *Variable* | The local light data. See below |
| GlobalLight | *Variable* | The local light data. See below |
| LocalChangeCounter | 2 | |
| GlobalChangeCounter | 2 | |

</div>

**BlockPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| BlockIdLength | 2 | The length of the block id |
| BlockId | *BlockIdLength* | The block id |
| Count | 2 | How many of this block exist in this section |

</div>

**FillerBlockPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| FillerBlockId | 2 | The block id |
| Count | 2 | How many of this block exist in this section |

</div>

**RotationBlockPalette**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| InternalId | 1 | The index within the palette. |
| RotationBlockId | 1 | The block id |
| Count | 2 | How many of this block exist in this section |

</div>

**LocalLight** & **GlobalLight**:

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| ChangeId | 2 | Unknown |
| HasLight | 1 (boolean) | |
| LightLength | 4 | |
| LightData | *Length* | An Octree of global light data |

</div>

## Block layout

Block positions are ordered YZX for compression purposes.

The coordinate system is as follows:

* **X** increases East, decreases West
* **Y** increases upward, decreases downward
* **Z** increases South, decreases North

This means indices are ordered like in a book, with its top to the North, read from beneath and with words written backward: each letter is a different X-index, each line a Z-index, and each page a Y-index. In case of a flat 2D array, the Y-index is omitted, and the array reads like a single page.

Each section is a 32×32×32-block area, with up to 10 sections in a chunk : from 0 at the bottom, to 31 on top. Empty sections are not saved. Each section has a "Palette" list linking IDs to blocks.

You can calculate the index for a chunk section one of the following ways:

(Simple index)<br>
`index = (y * 32 + z) * 32 + x`

(Advanced index. loops over when out of bounds)<br>
`index = (y & 31) << 10 | (z & 31) << 5 | x & 31`
