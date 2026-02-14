!!! note
    This page was refined and clarified by ChatGPT.

# EnvironmentChunk format

EnvironmentChunk data is in **Big Endian** byte order.

## Binary format

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| PaletteSize | 4 | The number of palette entries. |
| Palette | *Variable* | The palette entries. |
| Columns | *Variable* | Exactly 1024 1×1 columns for this chunk. |

</div>

### Palette Entry

Repeated `PaletteSize` times.

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| SerialId | 4 | A serialized environment Id referenced by column entries. |
| KeyLength | 2 | Unsigned 16-bit length of Key. |
| Key | *KeyLength* | UTF-8 encoded environment key. |

</div>

Columns reference environments using `SerialId`.

### Columns Section

Exactly 1024 1×1 columns, ordered in a 32×32 grid:

```
x = columnIndex % 32
z = columnIndex / 32
```

#### Column Structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| BoundaryCount | 4 | The number of vertical Y boundaries. |
| MaxYs | *BoundaryCount* × 4 | The absolute Y boundary values (inclusive upper bounds of each segment). |
| EnvironmentIds | (*BoundaryCount* + 1) × 4 | Serialized environment IDs for each vertical segment. |

</div>

### Vertical Segmentation Model

If:

```
BoundaryCount = n
MaxYs = [Y0, Y1, ..., Yn-1]
EnvironmentIds = [E0, E1, ..., En]
```

Then vertical segments are:

```
Segment 0: ( -∞ -> MaxYs[0] )
Segment i: ( MaxYs[i-1] + 1 -> MaxYs[i] )
Segment n: ( MaxYs[n-1] + 1 -> +∞ )
```

Each `EnvironmentIds[i]` must match a `SerialId` defined in the palette.
