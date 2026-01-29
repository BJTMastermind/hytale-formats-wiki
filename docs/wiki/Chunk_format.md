!!! info
    This page is a work in progress

# Chunk format

Chunks store the terrain and entities within a 32×320×32 area in the world. They also store precomputed lighting, heightmap data for Hytale's performance, and other meta information.

## BSON structure

!!! info
    This section is a work in progress. Some BSON type labels may be incorrect and some BSON document contents are missing due to being empty in my test files. Descriptions will be filled in last.

*See also: [Region file format](./Region_file_format.md)*

Chunks are stored as types in regional Hytale Region files, which are named in the form `x.z.region.bin`. They are stored in [BSON format](https://en.wikipedia.org/wiki/BSON), with the following structure:

<div markdown="1" id="treeview">
* BSON_Document("Components"): Root document.
    * BSON_Document("BlockComponentChunk"):
        * BSON_Document("BlockComponents"):
            * BSON_Document("*<5_digit_number\>*"):
                * BSON_Document("Components"):
                    * BSON_Document("*blockId*"):
                        * BSON_*<Type\>*("*Components for blockId*"):
    * BSON_Document("ChunkColumn"):
        * BSON_Array("Sections"):
            * BSON_Document: A section document.
                * BSON_Document("Components"):
                    * BSON_Document("ChunkSection"):
                    * BSON_Document("BlockPhysics"):
                        * BSON_Binary<Generic\>("Data"):
                    * BSON_Document("Fluid"):
                        * BSON_Binary<Generic\>("Data"):
                    * BSON_Document("Block"):
                        * BSON_Int32("Version"):
                        * BSON_Binary<Generic\>("Data"):
    * BSON_Document("WorldChunk"):
    * BSON_Document("BlockHealthChunk"):
        * BSON_Binary<Generic\>("Data"):
        * BSON_String("LastRepairGameTime"):
    * BSON_Document("ChunkSpawnedNPCData"):
        * BSON_Document("EnvironmentSpawnCounts"):
    * BSON_Document("EnvironmentChunk"):
        * BSON_Binary<Generic\>("Data"):
    * BSON_Document("BlockChunk"):
        * BSON_Int32("Version"):
        * BSON_Binary<Generic\>("Data"):
    * BSON_Document("EntityChunk"):
        * BSON_Array("Entities"):
            * BSON_Document: An entity.
                * BSON_Document("Components"):
                    * BSON_Document("EffectController"):
                    * BSON_Document("DisplayName"):
                        * BSON_Document("DisplayName"):
                            * BSON_String("MessageId"):
                            * BSON_Boolean("Bold"):
                            * BSON_Boolean("Italic"):
                            * BSON_Boolean("Monospace"):
                            * BSON_Boolean("Underline"):
                    * BSON_Document("UIComponentList"):
                    * BSON_Document("Transform"):
                        * BSON_Document("Position"):
                            * BSON_Double("X"):
                            * BSON_Double("Y"):
                            * BSON_Double("Z"):
                        * BSON_Document("Rotation"):
                            * BSON_Double("Pitch"):
                            * BSON_Double("Yaw"):
                            * BSON_Double("Roll"):
                    * BSON_Document("Velocity"):
                        * BSON_Document("Velocity"):
                            * BSON_Double("X"):
                            * BSON_Double("Y"):
                            * BSON_Double("Z"):
                    * BSON_Document("PrefabCopyable"):
                    * BSON_Document("Interactions"):
                        * BSON_Document("Interactions"):
                            * BSON_String("Use"):
                    * BSON_Document("Model"):
                        * BSON_Document("Model"):
                            * BSON_String("Id"):
                            * BSON_Double("Scale"):
                            * BSON_Boolean("Static"):
                    * BSON_Document("UUID"):
                        * BSON_Binary<UUID\>("UUID"):
                    * BSON_Document("EntityStats"):
                        * BSON_Int32("Version"):
                        * BSON_Document("*<Stat\>*"):
                            * BSON_String("Id"):
                            * BSON_Double("Value"):
                    * BSON_Document("NPC"):
                        * BSON_Int32("Version"):
                        * BSON_Binary<UUID\>("UUID"):
                        * BSON_Document("Inventory"):
                            * BSON_Int32("Version"):
                            * BSON_Document("Storage"):
                                * BSON_String("Id"):
                                * BSON_Int32("Capacity"):
                                * BSON_Document("Items"):
                                    * BSON_Document("*<index\>*"):
                                        * BSON_String("Id"):
                                        * BSON_Int32("Quantity"):
                                        * BSON_Double("Durability"):
                                        * BSON_Double("MaxDurability"):
                                        * BSON_Boolean("OverrideDroppedItemAnimation"):
                            * BSON_Document("Armor"):
                                * BSON_String("Id"):
                                * BSON_Int32("Capacity"):
                                * BSON_Document("Items"):
                                    * BSON_Document("*<index\>*"):
                                        * BSON_String("Id"):
                                        * BSON_Int32("Quantity"):
                                        * BSON_Double("Durability"):
                                        * BSON_Double("MaxDurability"):
                                        * BSON_Boolean("OverrideDroppedItemAnimation"):
                            * BSON_Document("HotBar"):
                                * BSON_String("Id"):
                                * BSON_Int32("Capacity"):
                                * BSON_Document("Items"):
                                    * BSON_Document("*<index\>*"):
                                        * BSON_String("Id"):
                                        * BSON_Int32("Quantity"):
                                        * BSON_Double("Durability"):
                                        * BSON_Double("MaxDurability"):
                                        * BSON_Boolean("OverrideDroppedItemAnimation"):
                            * BSON_Document("Utility"):
                                * BSON_String("Id"):
                                * BSON_Int32("Capacity"):
                                * BSON_Document("Items"):
                                    * BSON_Document("*<index\>*"):
                                        * BSON_String("Id"):
                                        * BSON_Int32("Quantity"):
                                        * BSON_Double("Durability"):
                                        * BSON_Double("MaxDurability"):
                                        * BSON_Boolean("OverrideDroppedItemAnimation"):
                            * BSON_Document("Backpack"):
                                * BSON_String("Id"):
                                * BSON_Int32("Capacity"):
                                * BSON_Document("Items"):
                                    * BSON_Document("*<index\>*"):
                                        * BSON_String("Id"):
                                        * BSON_Int32("Quantity"):
                                        * BSON_Double("Durability"):
                                        * BSON_Double("MaxDurability"):
                                        * BSON_Boolean("OverrideDroppedItemAnimation"):
                            * BSON_Int32("ActiveHotbarSlot"):
                            * BSON_Document("Tool"):
                                * BSON_String("Id"):
                                * BSON_Int32("Capacity"):
                                * BSON_Document("Items"):
                                    * BSON_Document("*<index\>*"):
                                        * BSON_String("Id"):
                                        * BSON_Int32("Quantity"):
                                        * BSON_Double("Durability"):
                                        * BSON_Double("MaxDurability"):
                                        * BSON_Boolean("OverrideDroppedItemAnimation"):
                            * BSON_Int32("ActiveToolsSlot"):
                            * BSON_Int32("ActiveUtilitySlot"):
                            * BSON_String("SortType"):
                        * BSON_Double("HvrPhs"):
                        * BSON_Double("HvrHght"):
                        * BSON_Double("MdlScl"):
                        * BSON_String("SpawnInstant"):
                        * BSON_Int32("WorldgenId"):
                        * BSON_Document("PathManager"):
                        * BSON_Document("LeashPos"):
                            * BSON_Double("X"):
                            * BSON_Double("Y"):
                            * BSON_Double("Z"):
                        * BSON_Double("LeashHdg"):
                        * BSON_Double("LeashPtch"):
                        * BSON_String("RoleName"):
                    * BSON_Document("HeadRotation"):
                        * BSON_Document("Rotation"):
                            * BSON_Double("Pitch"):
                            * BSON_Double("Yaw"):
                            * BSON_Double("Roll"):
</div>

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
