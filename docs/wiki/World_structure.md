# World structure

Each world is its own folder. A world folder is often identified by having a `universe` subfolder, along with other subfolders to store mod configs and regions of the world.

## Directory structure

This is the directory structure of the `Hytale/Saves` folder, where the game saves the entire world data:

<div markdown="1" id="treeview">

* : A world directory.
{.addicon .file_system.directory}
    * backup: Contains backups of the contents of the universe folder automaticly created by the game while playing.
    {.addicon .file_system.directory}
        * archive: Contains archived backup files. An archived backup is the oldest backup thats about to be replaced with a newer backup.
        {.addicon .file_system.directory}
            * <yyyy\>-<MM\>-<dd\>_<HH\>-<mm\>-<ss\>.zip: An archived backup file.
            {.addicon .file_system.archive}
        * <yyyy\>-<MM\>-<dd\>_<HH\>-<mm\>-<ss\>.zip: A backup file.
        {.addicon .file_system.archive}
    * logs: Contains copies of the games console log.
    {.addicon .file_system.directory}
        * <yyyy\>-<MM\>-<dd\>_<HH\>-<mm\>-<ss\>_server.log: A console log.
        {.addicon .file_system.file}
    * mods: Stores the installed mods config files and other data that are used with this world.
    {.addicon .file_system.directory}
        * Hytale_Shop: Contains information relating to hytale's shop/merchant entities.
        {.addicon .file_system.directory}
            * barter_shop_state.json: Tracks shop/merchant current stock and restock times. See [Barter Shop State format](./Barter_Shop_State_format.md).
            {.addicon .file_system.file}
    * prefabs: Contains all player created prefabs for this world.
    {.addicon .file_system.directory}
        * <name\>.prefab.json: An exported prefab. See [Prefab format](./Prefab_format.md).
        {.addicon .file_system.file}
    * universe
    {.addicon .file_system.directory}
        * players: Stores the individual states of the players that have played in this world.
        {.addicon .file_system.directory}
            * <uuid\>.json: A json file of the player. See [Player format](./Player_format.md).
            {.addicon .file_system.file}
        * worlds
        {.addicon .file_system.directory}
            * default: The default world, normally Orbis.
            {.addicon .file_system.directory}
                * chunks: Stores region files of the world.
                {.addicon .file_system.directory}
                    * <x\>.<z\>.region.bin: A region file. See [Region file format](./Region_file_format.md).
                    {.addicon .file_system.file}
                * resources
                {.addicon .file_system.directory}
                    * BlockCounter.json: Tracks how many of a limited block have been placed. See [Block Counter format](./Block_Counter_format.md).
                    {.addicon .file_system.file}
                    * BlockMapMarkers.json: Tracks the map markers, such as the Forgotten Temple. See [Block Map Markers format](./Block_Map_Markers_format.md).
                    {.addicon .file_system.file}
                    * ChunkStorage.json: See [Chunk Storage format](./Chunk_Storage_format.md).
                    {.addicon .file_system.file}
                    * InstanceData.json: Tracks various instance related data. See [Instance Data](./Instance_Data_format.md).
                    {.addicon .file_system.file}
                    * PrefabEditSession.json: Used for storing prefab data. See [Prefab Edit Session format](./Prefab_Edit_Session_format.md).
                    {.addicon .file_system.file}
                    * ReputationData.json: See [Reputation Data format](./Reputation_Data_format.md).
                    {.addicon .file_system.file}
                    * SharedUserMapMarkers.json: Tracks user defined shared map markers. See [Shared User Map Markers format](./Shared_User_Map_Markers_format.md)
                    {.addicon .file_system.file}
                    * SpawnSuppressionController.json: Used to prevent NPCs from spawning in a given area. See [Spawn Suppression Controller format](./Spawn_Suppression_Controller_format.md).
                    {.addicon .file_system.file}
                    * Time.json: Tracks the in-game time in a real-time equivalent. See [Time format](./Time_format.md).
                    {.addicon .file_system.file}
                * config.json: Contains global information about the world. See [World Config format](./World_Config_format.md).
                {.addicon .file_system.file}
        * memories.json: Used to store the players found "Memories". See [Memories format](./Memories_format.md).
        {.addicon .file_system.file}
        * warps.json: Tracks all warp locations. See [Warps format](./Warps_format.md).
        {.addicon .file_system.file}
    * bans.json: Tracks the players that are banned from this world. See [Bans format](./Bans_format.md).
    {.addicon .file_system.file}
    * client_metadata.json: Tracks what patchline the world was last loaded with. See [Client Metadata format](./Client_Metadata_format.md).
    {.addicon .file_system.file}
    * config.json: Tracks all mods avablible for the world and which ones are enabled. See [Mods Config format](./Mods_Config_format.md).
    {.addicon .file_system.file}
    * permissions.json: Tracks the permissions of all players. See [Permission format](./Permissions_format.md).
    {.addicon .file_system.file}
    * preview.png: The world icon.
    {.addicon .file_system.image_file}
    * whitelist.json: Tracks what players are allowed to enter the world. See [Whitelist format](./Whitelist_format.md).
    {.addicon .file_system.file}

</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.17-4b0f30090</th>
            <td>Added client_metadata.json file to track which patchline the world was created with.</td>
        </tr>
        <tr>
            <th rowspan="2">2026.02.17-255364b8e</th>
            <td>Added SharedUserMapMarkers.json file to track user defined map markers that are shared with other players.</td>
        </tr>
        <tr>
            <td>Added ChunkStorage.json file, current uses is unknown.</td>
        </tr>
    </tbody>
</table>
