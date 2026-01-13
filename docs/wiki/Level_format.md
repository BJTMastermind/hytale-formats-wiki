# Level format

Each level is its own folder. A level folder itself (can be empty) is how the game identifies a level, along with other subfolders to store the maps and regions of the level.

## Directory structure

This is the directory structure of the `Hytale/Saves` folder, where the game saves the entire world data:

<div markdown="1" id="treeview">

* : A world directory.
{.addicon .file_system.directory}
    * log
    {.addicon .file_system.directory}
        * <yyyy\>-<mm\>-<dd\>_<HH\>-<MM\>-<SS\>_server.log
        {.addicon .file_system.file}
    * mods: Stores the installed mods that are used with this world.
    {.addicon .file_system.directory}
        * Hytale_Shop
        {.addicon .file_system.directory}
            * barter_shop_state.json
            {.addicon .file_system.file}
    * universe
    {.addicon .file_system.directory}
        * players: Stores the individual states of the players that have played in this world.
        {.addicon .file_system.directory}
            * <uuid\>.json: A json file of the player. See **Player.json format**. (Coming Soon)
            {.addicon .file_system.file}
        * worlds
        {.addicon .file_system.directory}
            * default: The default world, normally Orbis.
            {.addicon .file_system.directory}
                * chunks: Stores region files of the world.
                {.addicon .file_system.directory}
                    * <x\>.<z\>.region.bin: A region file. See [Chunk format](./Chunk_format.md).
                    {.addicon .file_system.file}
                * resources
                {.addicon .file_system.directory}
                    * BlockCounter.json
                    {.addicon .file_system.file}
                    * BlockMapMarkers.json
                    {.addicon .file_system.file}
                    * InstanceData.json
                    {.addicon .file_system.file}
                    * PrefabEditSession.json
                    {.addicon .file_system.file}
                    * ReputationData.json
                    {.addicon .file_system.file}
                    * SpawnSuppressionController.json
                    {.addicon .file_system.file}
                    * Time.json
                    {.addicon .file_system.file}
                * config.json
                {.addicon .file_system.file}
        * memories.json
        {.addicon .file_system.file}
    * bans.json
    {.addicon .file_system.file}
    * config.json
    {.addicon .file_system.file}
    * permissions.json
    {.addicon .file_system.file}
    * preview.png
    {.addicon .file_system.file}
    * whitelist.json
    {.addicon .file_system.file}

</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-dcad8778f</th>
            <td>To Be Determined</td>
        </tr>
    </tbody>
</table>
