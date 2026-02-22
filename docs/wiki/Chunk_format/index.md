# Chunk format

Chunks store the terrain and entities within a 32×320×32 area in the world. They also store precomputed lighting, heightmap data for Hytale's performance, and other meta information.

## BSON structure

!!! note
    Some BSON document contents are missing due to being empty in my test files.

*See also: [Region file format](../Region_file_format.md)*

Chunks are stored as types in regional Hytale Region files, which are named in the form `x.z.region.bin`. They are stored in [BSON format](https://en.wikipedia.org/wiki/BSON), with the following structure:

<div markdown="1" id="treeview">

* BSON_Document("Components"): Root document.
    * BSON_Document("BlockComponentChunk"): Currently unknown.
        * BSON_Document("BlockComponents"): Currently unknown.
            * BSON_Document("*<5_digit_number\>*"): Currently unknown.
                * BSON_Document("Components"): Contains all blocks and their components.
                    * BSON_Document("*blockId*"): Holds all components for this block id.
                        * BSON_*<Type\>*("*Components for blockId*"): A component for this block.
    * BSON_Document("ChunkColumn"): Contains all data relating to the blocks and fluids in this chunk.
        * BSON_Array("Sections"): An array of 10 BSON_Documents containing information for all the sections within this chunk.
            * BSON_Document: A section document.
                * BSON_Document("Components"): Contains the chunk sections components.
                    * BSON_Document("ChunkSection"): Currently unknown.
                    * BSON_Document("BlockPhysics"): Contains information for the support level of blocks that require a support block.
                        * BSON_Binary<Generic\>("Data"): See [BlockPhysics format](./BlockPhysics_format.md).
                    * BSON_Document("Fluid"): Contains the fluid information for this chunk section.
                        * BSON_Binary<Generic\>("Data"): See [Fluid format](./Fluid_format.md).
                    * BSON_Document("Block"): Contains the block information for this chunk section.
                        * BSON_Int32("Version"): Referenced by some parts of the Block format.
                        * BSON_Binary<Generic\>("Data"): See [Block format](./Block_format/index.md).
    * BSON_Document("WorldChunk"): Currently unknown.
    * BSON_Document("BlockHealthChunk"): Use is currently unknown.
        * BSON_Binary<Generic\>("Data"): See [BlockHealthChunk format](./BlockHealthChunk_format.md).
        * BSON_String("LastRepairGameTime"): Currently unknown.
    * BSON_Document("ChunkSpawnedNPCData"): Currently unknown.
        * BSON_Document("EnvironmentSpawnCounts"): Currently unknown.
    * BSON_Document("EnvironmentChunk"): Stores the environment data for this chunk.
        * BSON_Binary<Generic\>("Data"): See [EnvironmentChunk format](./EnvironmentChunk_format.md).
    * BSON_Document("BlockChunk"): Stores heightmap and tint data for this chunk.
        * BSON_Int32("Version"): Referenced by some parts of the BlockChunk format.
        * BSON_Binary<Generic\>("Data"): See [BlockChunk format](./BlockChunk_format.md).
    * BSON_Document("EntityChunk"): Contains all entities in this chunk.
        * BSON_Array("Entities"): Array of all entities in this chunk.
            * BSON_Document: An entity.
                * BSON_Document("Components"): All the components this entity has.
                    * BSON_Document("EffectController"): Currently unknown.
                    * BSON_Document("DisplayName"): The entity's display name information.
                        * BSON_Document("DisplayName")
                            * BSON_String("MessageId"): The name of this entity.
                            * BSON_Boolean("Bold"): `true` if the name should be display in a bold font.
                            * BSON_Boolean("Italic"): `true` if the name should be display in a italic font.
                            * BSON_Boolean("Monospace"): `true` if the name should be display in a monospace font.
                            * BSON_Boolean("Underline"): `true` if the name should be display with a underline.
                    * BSON_Document("UIComponentList"): Currently unknown.
                    * BSON_Document("Transform"): The entity's position and rotation in the world.
                        * BSON_Document("Position"): The entity's position.
                            * BSON_Double("X"): X position of the entity.
                            * BSON_Double("Y"): Y position of the entity.
                            * BSON_Double("Z"): Z position of the entity.
                        * BSON_Document("Rotation"): The entity's rotation.
                            * BSON_Double("Pitch"): The X rotation of the entity.
                            * BSON_Double("Yaw"): The Y rotation of the entity.
                            * BSON_Double("Roll"): The Z rotation of the entity.
                    * BSON_Document("Velocity"): The entity's velocity.
                        * BSON_Document("Velocity")
                            * BSON_Double("X"): X direction velocity value.
                            * BSON_Double("Y"): Y direction velocity value.
                            * BSON_Double("Z"): Z direction velocity value.
                    * BSON_Document("PrefabCopyable"): Currently unknown.
                    * BSON_Document("Interactions"): Contains interactions that this npc can use.
                        * BSON_Document("Interactions")
                            * BSON_String("*<InteractionType\>*"): The id of this interaction type.
                    * BSON_Document("Model"): Model information for this entity.
                        * BSON_Document("Model")
                            * BSON_String("Id"): The model Id for this entity.
                            * BSON_Double("Scale"): The entity's model scale.
                            * BSON_Boolean("Static"): `true` if the model is static.
                    * BSON_Document("UUID"): The entity's UUID.
                        * BSON_Binary<UUID\>("UUID"): The UUID stored in binary form.
                    * BSON_Document("EntityStats"): Contains all stats of this entity, such as their oxygen level, mana level, and more.
                        * BSON_Int32("Version"): The entity stats format version used when saved.
                        * BSON_Document("*<Stat\>*"): A entity stat.
                            * BSON_String("Id"): The id of the stat. Normally matches document key name.
                            * BSON_Double("Value"): The value of the entity stat.
                    * BSON_Document("NPC"): Contains common npc data.
                        * BSON_Int32("Version"): The npc format version used when saved.
                        * BSON_Binary<UUID\>("UUID"): The entity's UUID stored in binary form. (Again)
                        * BSON_Document("Inventory"): Contains all items across all inventories for this entity.
                            * BSON_Int32("Version"): The inventory format version used when saved.
                            * BSON_Document("Storage"): Contains all items in the main inventory.
                                * BSON_String("Id"): The inventory type id. Normally `Simple`.
                                * BSON_Int32("Capacity"): The total number of inventory slots available.
                                * BSON_Document("Items"): List of items in this inventory. Empty if no items are present.
                                    * BSON_Document("*<index\>*"): An item at the given inventory index.
                                        * BSON_String("Id"): The item id
                                        * BSON_Int32("Quantity"): The item count.
                                        * BSON_Double("Durability"): The items current durability.
                                        * BSON_Double("MaxDurability"): The items total durability when un-damaged.
                                        * BSON_Boolean("OverrideDroppedItemAnimation"): Currently unknown.
                            * BSON_Document("Armor"): Contains all items in the armor slots.
                                * BSON_String("Id"): The inventory type id. Normally `Simple`.
                                * BSON_Int32("Capacity"): The total number of inventory slots available.
                                * BSON_Document("Items"): List of items in this inventory. Empty if no items are present.
                                    * BSON_Document("*<index\>*"): An item at the given inventory index.
                                        * BSON_String("Id"): The item id
                                        * BSON_Int32("Quantity"): The item count.
                                        * BSON_Double("Durability"): The items current durability.
                                        * BSON_Double("MaxDurability"): The items total durability when un-damaged.
                                        * BSON_Boolean("OverrideDroppedItemAnimation"): Currently unknown.
                            * BSON_Document("HotBar"): Contains all items in the hotbar.
                                * BSON_String("Id"): The inventory type id. Normally `Simple`.
                                * BSON_Int32("Capacity"): The total number of inventory slots available.
                                * BSON_Document("Items"): List of items in this inventory. Empty if no items are present.
                                    * BSON_Document("*<index\>*"): An item at the given inventory index.
                                        * BSON_String("Id"): The item id
                                        * BSON_Int32("Quantity"): The item count.
                                        * BSON_Double("Durability"): The items current durability.
                                        * BSON_Double("MaxDurability"): The items total durability when un-damaged.
                                        * BSON_Boolean("OverrideDroppedItemAnimation"): Currently unknown.
                            * BSON_Document("Utility"): Contains all items in the utility/offhand wheel.
                                * BSON_String("Id"): The inventory type id. Normally `Simple`.
                                * BSON_Int32("Capacity"): The total number of inventory slots available.
                                * BSON_Document("Items"): List of items in this inventory. Empty if no items are present.
                                    * BSON_Document("*<index\>*"): An item at the given inventory index.
                                        * BSON_String("Id"): The item id
                                        * BSON_Int32("Quantity"): The item count.
                                        * BSON_Double("Durability"): The items current durability.
                                        * BSON_Double("MaxDurability"): The items total durability when un-damaged.
                                        * BSON_Boolean("OverrideDroppedItemAnimation"): Currently unknown.
                            * BSON_Document("Backpack"): Contains all items in the entity's backpack.
                                * BSON_String("Id"): The inventory type id. Normally `Simple`.
                                * BSON_Int32("Capacity"): The total number of inventory slots available.
                                * BSON_Document("Items"): List of items in this inventory. Empty if no items are present.
                                    * BSON_Document("*<index\>*"): An item at the given inventory index.
                                        * BSON_String("Id"): The item id
                                        * BSON_Int32("Quantity"): The item count.
                                        * BSON_Double("Durability"): The items current durability.
                                        * BSON_Double("MaxDurability"): The items total durability when un-damaged.
                                        * BSON_Boolean("OverrideDroppedItemAnimation"): Currently unknown.
                            * BSON_Int32("ActiveHotbarSlot"): The entity's currently selected hotbar slot.
                            * BSON_Document("Tool"): Currently unknown.
                                * BSON_String("Id"): The inventory type id. Normally `Simple`.
                                * BSON_Int32("Capacity"): The total number of inventory slots available.
                                * BSON_Document("Items"): List of items in this inventory. Empty if no items are present.
                                    * BSON_Document("*<index\>*"): An item at the given inventory index.
                                        * BSON_String("Id"): The item id
                                        * BSON_Int32("Quantity"): The item count.
                                        * BSON_Double("Durability"): The items current durability.
                                        * BSON_Double("MaxDurability"): The items total durability when un-damaged.
                                        * BSON_Boolean("OverrideDroppedItemAnimation"): Currently unknown.
                            * BSON_Int32("ActiveToolsSlot"): The entity's currently selected tool slot. `-1` if none.
                            * BSON_Int32("ActiveUtilitySlot"): The entity's currently selected utility/offhand slot. `-1` if none.
                            * BSON_String("SortType"): The entity's inventory item sort type.
                        * BSON_Double("HvrPhs"): The entity's hover phase.
                        * BSON_Double("HvrHght"): The entity's hover height.
                        * BSON_Double("MdlScl"): The entity's initial model scale.
                        * BSON_String("SpawnInstant"): The timestamp of when this entity spawned into the world. in the format of `YYYY-MM-DDThh:mm:ssZ` as in-game time i.e `0001-01-01T12:00:00Z`.
                        * BSON_Int32("WorldgenId"): Use currently unknown. (deprecated field)
                        * BSON_Document("PathManager"): Currently unknown.
                        * BSON_Document("LeashPos"): The entity's spawn location.
                            * BSON_Double("X"): The X position of where this entity spawned.
                            * BSON_Double("Y"): The Y position of where this entity spawned.
                            * BSON_Double("Z"): The Z position of where this entity spawned.
                        * BSON_Double("LeashHdg"): The entity's yaw/heading when first spawned.
                        * BSON_Double("LeashPtch"): The entity's pitch when first spawned.
                        * BSON_String("RoleName"): The entity's Id.
                    * BSON_Document("HeadRotation"): The entity's initial head rotation.
                        * BSON_Document("Rotation")
                            * BSON_Double("Pitch"): The initial X rotation of the entity.
                            * BSON_Double("Yaw"): The initial Y rotation of the entity.
                            * BSON_Double("Roll"): The initial Z rotation of the entity.

</div>

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
