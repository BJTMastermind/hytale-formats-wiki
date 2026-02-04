# BlockChunk format

BlockChunk data is in **Little Endian** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| NeedsPhysics | 1 (boolean) | Unknown |
| HeightCount | 2 | |
| HeightKeys | *HeightCount* * 2 | |
| HeightLength | 4 | |
| Height | *HeightLength* | |
| TintCount | 2 | |
| TintKeys | *TintCount* * 4 |
| TintLength | 4 | |
| Tint | *TintLength* | |
| SectionCount | 4 | Only exists if version is 2 or less |
| Sections | *Variable* | Only exists if version is 2 or less. See [Block format](./Block_format.md) |

</div>
