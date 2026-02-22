# BlockChunk format

BlockChunk data is in **Little Endian** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| NeedsPhysics | 1 (boolean) | Unknown |
| HeightCount | 2 | Number of height keys |
| HeightKeys | ***HeightCount*** × 2 | Array of 16-bit integer keys |
| HeightLength | 4 | Height data length |
| Height | ***HeightLength*** | Height data (Might be VarInts) |
| TintCount | 2 | Number of tint keys |
| TintKeys | ***TintCount*** × 4 | Array of 32-bit integer keys |
| TintLength | 4 | Tint data length |
| Tint | ***TintLength*** | Tint data (Might be VarInts) |

</div>
