!!! info
    This page is a work in progress

# Chunk format

Chunks store the terrain and entities within a 32×320×32 area in the world. They also store precomputed lighting, heightmap data for Hytale's performance, and other meta information.

## BSON structure

!!! info
    This section is a work in progress. Some BSON type labels may be incorrect and some BSON object contents are missing due to being empty in my test files. Descriptions will be filled in last.

*See also: [Region file format](./Region_file_format.md)*

Chunks are stored as objects in regional Hytale Region files, which are named in the form `x.z.region.bin`. They are stored in [BSON format](https://en.wikipedia.org/wiki/BSON), with the following structure:

<div markdown="1" id="treeview">
* BSON_Object: Root object.
    * BSON_Object("Components"):
        * BSON_Object("BlockComponentChunk"):
            * BSON_Object("BlockComponents"):
                * BSON_Object:("*<5_digit_number\>*"):
                    * BSON_Object("Components"):
                        * BSON_Object("*blockId*"):
                            * BSON_Int("version"):
                            * BSON_*<Type\>*("*Components for blockId*"):
        * BSON_Object("ChunkColumn"):
            * BSON_Array("Sections"):
                * BSON_Object: A section object.
                    * BSON_Object("Components"):
                        * BSON_Object("ChunkSection"):
                        * BSON_Object("BlockPhysics"):
                        * BSON_Object("Fluid"):
                        * BSON_Object("Block"):
        * BSON_Object("WorldChunk"):
        * BSON_Object("BlockHealthChunk"):
            * BSON_String("Data"):
            * BSON_Date("LastRepairGameTime"):
        * BSON_Object("ChunkSpawnedNPCData"):
            * BSON_Object("EnvironmentSpawnCounts"):
        * BSON_Object("EnvironmentChunk"):
            * BSON_String("Data"):
        * BSON_Object("BlockChunk"):
            * BSON_Int("Version"):
            * BSON_String("Data"):
        * BSON_Object("EntityChunk"):
            * BSON_Array("Entities"):
                * BSON_Object: An entity.
                    * BSON_Object("Components"):
                        * BSON_Object("EffectController"):
                        * BSON_Object("DisplayName"):
                            * BSON_Object("DisplayName"):
                                * BSON_String("MessageId"):
                                * BSON_Bool("Bold"):
                                * BSON_Bool("Italic"):
                                * BSON_Bool("Monospace"):
                                * BSON_Bool("Underline"):
                        * BSON_Object("UIComponentList"):
                        * BSON_Object("Transform"):
                            * BSON_Object("Position"):
                                * BSON_Double("X"):
                                * BSON_Double("Y"):
                                * BSON_Double("Z"):
                            * BSON_Object("Rotation"):
                                * BSON_Double("Pitch"):
                                * BSON_Double("Yaw"):
                                * BSON_Double("Roll"):
                        * BSON_Object("Velocity"):
                            * BSON_Object("Velocity"):
                                * BSON_Double("X"):
                                * BSON_Double("Y"):
                                * BSON_Double("Z"):
                        * BSON_Object("PrefabCopyable"):
                        * BSON_Object("Interactions"):
                            * BSON_Object("Interactions"):
                                * BSON_String("Use"):
                        * BSON_Object("Model"):
                            * BSON_Object("Model"):
                                * BSON_String("Id"):
                                * BSON_Int("Scale"):
                                * BSON_Bool("Static"):
                        * BSON_Object("UUID"):
                            * BSON_UUID("UUID"):
                        * BSON_Object("EntityStats"):
                            * BSON_Int("Version"):
                            * BSON_Object("*<Stat\>*"):
                                * BSON_String("Id"):
                                * BSON_Int("Value"):
                        * BSON_Object("NPC"):
                            * BSON_Int("Version"):
                            * BSON_UUID("UUID"):
                            * BSON_Object("Inventory"):
                                * BSON_Int("Version"):
                                * BSON_Object("Storage"):
                                    * BSON_String("Id"):
                                    * BSON_Int("Capacity"):
                                    * BSON_Object("Items"):
                                        * BSON_Object("*<index\>*"):
                                            * BSON_String("Id"):
                                            * BSON_Int("Quantity"):
                                            * BSON_Int("Durability"):
                                            * BSON_Int("MaxDurability"):
                                            * BSON_Bool("OverrideDroppedItemAnimation"):
                                * BSON_Object("Armor"):
                                    * BSON_String("Id"):
                                    * BSON_Int("Capacity"):
                                    * BSON_Object("Items"):
                                        * BSON_Object("*<index\>*"):
                                            * BSON_String("Id"):
                                            * BSON_Int("Quantity"):
                                            * BSON_Int("Durability"):
                                            * BSON_Int("MaxDurability"):
                                            * BSON_Bool("OverrideDroppedItemAnimation"):
                                * BSON_Object("HotBar"):
                                    * BSON_String("Id"):
                                    * BSON_Int("Capacity"):
                                    * BSON_Object("Items"):
                                        * BSON_Object("*<index\>*"):
                                            * BSON_String("Id"):
                                            * BSON_Int("Quantity"):
                                            * BSON_Int("Durability"):
                                            * BSON_Int("MaxDurability"):
                                            * BSON_Bool("OverrideDroppedItemAnimation"):
                                * BSON_Object("Utility"):
                                    * BSON_String("Id"):
                                    * BSON_Int("Capacity"):
                                    * BSON_Object("Items"):
                                        * BSON_Object("*<index\>*"):
                                            * BSON_String("Id"):
                                            * BSON_Int("Quantity"):
                                            * BSON_Int("Durability"):
                                            * BSON_Int("MaxDurability"):
                                            * BSON_Bool("OverrideDroppedItemAnimation"):
                                * BSON_Object("Backpack"):
                                    * BSON_String("Id"):
                                    * BSON_Int("Capacity"):
                                    * BSON_Object("Items"):
                                        * BSON_Object("*<index\>*"):
                                            * BSON_String("Id"):
                                            * BSON_Int("Quantity"):
                                            * BSON_Int("Durability"):
                                            * BSON_Int("MaxDurability"):
                                            * BSON_Bool("OverrideDroppedItemAnimation"):
                                * BSON_Int("ActiveHotbarSlot"):
                                * BSON_Object("Tool"):
                                    * BSON_String("Id"):
                                    * BSON_Int("Capacity"):
                                    * BSON_Object("Items"):
                                        * BSON_Object("*<index\>*"):
                                            * BSON_String("Id"):
                                            * BSON_Int("Quantity"):
                                            * BSON_Int("Durability"):
                                            * BSON_Int("MaxDurability"):
                                            * BSON_Bool("OverrideDroppedItemAnimation"):
                                * BSON_Int("ActiveToolsSlot"):
                                * BSON_Int("ActiveUtilitySlot"):
                                * BSON_String("SortType"):
                            * BSON_Int("HvrPhs"):
                            * BSON_Int("HvrHght"):
                            * BSON_Int("MdlScl"):
                            * BSON_Date("SpawnInstant"):
                            * BSON_Int("WorldgenId"):
                            * BSON_Object("PathManager"):
                            * BSON_Object("LeashPos"):
                                * BSON_Double("X"):
                                * BSON_Double("Y"):
                                * BSON_Double("Z"):
                            * BSON_Double("LeashHdg"):
                            * BSON_Double("LeashPtch"):
                            * BSON_String("RoleName"):
                        * BSON_Object("HeadRotation"):
                            * BSON_Object("Rotation"):
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
