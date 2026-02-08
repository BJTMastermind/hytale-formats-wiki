# BlockChunk format

BlockChunk data is in **Mixed** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description | Byte Order |
|------|-----------------|-------------|------------|
| NeedsPhysics | 1 (boolean) | Unknown | N/A |
| HeightCount | 2 | | Little |
| HeightKeys | *HeightCount* * 2 | | Little |
| HeightLength | 4 | | Little |
| Height | *HeightLength* | | N/A |
| TintCount | 2 | | Little |
| TintKeys | *TintCount* * 4 | | Little |
| TintLength | 4 | | Little |
| Tint | *TintLength* | | N/A |
| SectionCount | 4 | Only exists if version is 2 or less | Big |
| Sections | *Variable* | Only exists if version is 2 or less. See [Block format](./Block_format/index.md) | Big |

</div>
