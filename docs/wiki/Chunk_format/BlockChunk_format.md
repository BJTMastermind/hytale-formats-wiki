!!! note
    This page was refined and clarified by ChatGPT.

# BlockChunk format

BlockChunk data is in **Little Endian** byte order.

## Binary structure

<div markdown="1" id="table">

| Name | Size (in bytes) | Description |
|------|-----------------|-------------|
| NeedsPhysics | 1 (boolean) | Currently unknown |
| HeightCount | 2 | Number of height keys |
| HeightKeys | ***HeightCount*** × 2 | Array of 16-bit integer keys |
| HeightLength | 4 | Height data length in bytes |
| Height | ***HeightLength*** | 1024 tightly packed 10-bit indexes into ***HeightKeys*** |
| TintCount | 2 | Number of tint keys |
| TintKeys | ***TintCount*** × 4 | Array of 32-bit integer keys |
| TintLength | 4 | Tint data length in bytes |
| Tint | ***TintLength*** | 1024 tightly packed 10-bit indexes into ***TintKeys*** |

</div>

### 10-bit Packing Rules

Index values are stored as unsigned 10-bit integers packed consecutively with **no padding** between entries.

* The first index occupies the least significant 10 bits of the stream.
* Subsequent values continue into higher bits.
* Packing is little-endian across byte boundaries.

Example layout of the first few values:

```
Byte 0: bits 0–7 -> Index 0 (bits 0–7)
Byte 1: bits 0–1 -> Index 0 (bits 8–9)
        bits 2–7 -> Index 1 (bits 0–5)
Byte 2: bits 0–3 -> Index 1 (bits 6–9)
        bits 4–7 -> Index 2 (bits 0–3)
```

Since each map contains 1024 entries:

`1024 × 10 bits = 10240 bits / 8 = 1280 bytes`

***HeightLength*** and ***TintLength*** should be 1280 bytes when populated.

## Heightmap Information

The heightmap stores the height value per (X, Z) position in a 32×32 grid stored in ZX order (X increments first).

Height values change only for full solid blocks. Non-solid or partial blocks do not affect the stored height.

## Tintmap Information

The tintmap stores a tint index per (X, Z) position in a 32×32 grid stored in ZX order (X increments first).
