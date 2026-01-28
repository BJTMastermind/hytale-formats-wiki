# Region file format

The **Region file format** is the [binary file format](https://en.wikipedia.org/wiki/Binary_file) for storing Hytale chunks. Each file stores a group of 32×32 chunks called a **region**.[\[a\]](#a) The file begins with a [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming)#In_files) of `HytaleIndexedStorage`.

## Location

Region files have names in the form `x.z.region.bin`, where x and z are the region's coordinates.

The coordinates of a region file in which any given chunk resides in, can be acquired through taking the floor of dividing the chunk coordinates by 32. For example, a chunk at (30, -3) would be in the region (0, -1), and one at (1500, -600) would be at (46, -19). Within the file, chunks are stored starting from (x=0,z=0), in "rows" of X. (I.e. (0,0) to (31,0), followed by (0,1) to (31,1), et cetera)

Alternatively, the same can be achieved through performing an [arithmetic shift](https://en.wikipedia.org/wiki/Arithmetic_shift) 5 bits to the right. It is important that an arithmetic shift occurs, rather than a [logical shift](https://en.wikipedia.org/wiki/Logical_shift).

```c
// float division
Int32 regionX = (Int32)floor(chunkX / 32.0f);
Int32 regionZ = (Int32)floor(chunkZ / 32.0f);

// arithmetic shift, important that `int` is signed.
Int32 regionX = chunkX >> 5;
Int32 regionZ = chunkZ >> 5;
```

Reciprocally, the starting block coordinate of a region can be calculated by multiplying the x and z region values (as defined by the region file's name) by 1024. Likewise, each chunk's starting block coordinate can be calculated by performing either modulo or floor/integer division to the chunk's index in the header table (0 through 1023) and adding the result to the region's x and z values:

```c
// get starting block in region x, z
Int32 regionX = blockX * 1024;
Int32 regionZ = blockZ * 1024;

// get chunk x, z
Int32 chunkX = regionX + ((headerIndex % 32) * 32);
Int32 chunkZ = regionZ + ((headerIndex / 32) * 32);
```

Converting from chunk coordinates of a region back to the header index, is done via the following formula. Where one example utilises [bitwise AND](https://en.wikipedia.org/wiki/Bitwise_and). This is potentially more efficient, but depending on the language the first example is optimised into the other variant at the assembly level. To acquire the starting byte of the [big-endian](https://en.wikipedia.org/wiki/Endianness) 32 bit integer, multiply the result of the computation below by 4 (32 / 8 = 4).

```c
// acquire header table index
int headerIndex = (x % 32) + (z % 32) * 32;

// acquire header table index (bitwise)
int headerIndex = (x & 31) + (z & 31) * 32;
```

## Structure

### Header

Region files begin with a 32 byte header plus a 4KiB table, containing the offsets of the chunks in the region file itself.

The offset of a chunk [x, z] (in chunk coordinates) in the table can be found using this formula: 4 * ((x mod 32) + (z mod 32) * 32). When using certain languages (such as Java/C/C++), the values of x mod 32 and z mod 32 can be negative. To prevent this, use the AND operator (&) instead of modulo: 4 * ((x & 31) + (z & 31) * 32).

<div markdown="1" id="table">
| byte | description |
|------|-------------|
| 0x00 - 0x13 | magic (20 bytes) |
| 0x14 - 0x17 | version (4 bytes) |
| 0x18 - 0x1B | blob count (1024 default; 4 bytes) |
| 0x1C - 0x1F | segment size (4096 default; 4 bytes) |
| 0x20 - 0x101F | locations (***blob count*** entries; 4 bytes each) |
| 0x2000... | chunks and unused space |
</div>

#### Chunk location

Location information for a chunk consists of a four byte integer offset pointing to the beginning of the chunks data blob. Chunks are always less then 1MiB in size. If a chunk isn't present in the region file (e.g. because it hasn't been generated yet), its index will be zero.

A chunk with an offset of 2, therefore pointing to (2 * 4096) + 32.

### Payload

Chunk data begins with a (big-endian) four-byte signed decompressed length, followed by a (big-endian) four-byte signed compressed length that indicates the exact length of the remaining chunk data in bytes.

*Hytale* always pads the chunk's data to be a multiple-of-4096B in length. *Hytale* does not accept files in which the chunks are not padded. Note that this padding is not included in the length integers.

<div markdown="1" id="table">
| byte | 0 - 3 | 4 - 7 | 8... |
|------|-------|-------|------|
| description | decompressed length (in bytes) | compressed length (in bytes) | compressed data |
</div>

The compression schema used by *Hytale* is [Zstd](https://en.wikipedia.org/wiki/Zstd).

The uncompressed data is in [BSON format](https://en.wikipedia.org/wiki/BSON) and follows the information detailed on the [chunk format](./Chunk_format.md) article.

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th rowspan="2">2026.01.13-dcad8778f</th>
            <td>The region file format is introduced.</td>
        </tr>
    </tbody>
</table>

## Notes

1. <a id="a"></a> A total of 1024 chunks can be stored in the format, covering an area of 1024x1024 blocks.

## Credits

1. This page used the [Minecraft wiki's Region file format](https://minecraft.wiki/w/Region_file_format) page as a base, with changes made to match *Hytale's* Region file format given how similar they are to each other.
