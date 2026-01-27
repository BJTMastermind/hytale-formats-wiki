!!! info
    This page is a work in progress

# Chunk format

Chunks store the terrain and entities within a 32×320×32 area in the world. They also store precomputed lighting, heightmap data for Hytale's performance, and other meta information.

## ??? structure

*See also: [Region file format](./Region_file_format.md)*

Chunks are stored as ? in regional Hytale Region files, which are named in the form `x.z.region.bin`. They are stored in ??? format, with the following structure:

Work in progress.

<!--
## Block format

Block positions are ordered YZX for compression purposes.

The coordinate system is as follows:

* **X** increases East, decreases West
* **Y** increases upward, decreases downward
* **Z** increases South, decreases North

This means indices are ordered like in a book, with its top to the North, read from beneath and with words written backward: each letter is a different X-index, each line a Z-index, and each page a Y-index. In case of a flat 2D array, the Y-index is omitted, and the array reads like a single page.

Each section is a 32×32×32-block area, with up to 10 sections in a chunk : from 0 at the bottom, to 31 on top. Empty sections are not saved.

You can calculate the index for a chunk section one of the following ways:

(Simple index)<br>
`index = (y * 32 + z) * 32 + x`

(Advanced index. loops over when out of bounds)<br>
`index = (y & 31) << 10 | (z & 31) << 5 | x & 31`
-->

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th rowspan="2">2026.01.13-dcad8778f</th>
            <td>The chunk format is introduced.</td>
        </tr>
        <tr>
            <td>Chunks are divided into 10 individual 32×32×32 block sections.</td>
        </tr>
    </tbody>
</table>
