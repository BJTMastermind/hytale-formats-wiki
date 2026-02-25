# World Config format

The **worlds/.../config.json** file contains global information about the world such as the time of day, the level generator used, and the seed.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * Version: The world config format used at the time of saving.
    {.addicon .json.int}
    * UUID: The worlds UUID stored in binary form encoded in base64.
    {.addicon .json.object}
        * $binary: The base64 encoded binary UUID value.
        {.addicon .json.string}
        * $type: The BSON binary type. Always `04` for UUID.
        {.addicon .json.string}
    * DisplayName: The name of this world as shown in-game.
    {.addicon .json.string}
    * Seed: The worlds seed.
    {.addicon .json.int}
    * SpawnProvider: Information for the world spawn point.
    {.addicon .json.object}
        * Id: Currently unknown. Always `Global`.
        {.addicon .json.string}
        * SpawnPoint: The players world spawn point and spawn rotation.
        {.addicon .json.object}
            * X: X position of the world spawn point.
            {.addicon .json.float}
            * Y: Y position of the world spawn point.
            {.addicon .json.float}
            * Z: Z position of the world spawn point.
            {.addicon .json.float}
            * Pitch: X rotation of the world spawn rotation.
            {.addicon .json.float}
            * Yaw: Y rotation of the world spawn rotation.
            {.addicon .json.float}
            * Roll: Z rotation of the world spawn rotation.
            {.addicon .json.float}
    * WorldGen: Information for the world generator used for this world.
    {.addicon .json.object}
        * Type: The id of the world generator to use. Either `Hytale` (v1) or `HytaleGenerator` (v2)
        {.addicon .json.string}
        * WorldStructure: The type of world/universe to generate. Doesn't exists if `Type` is Hytale.
        {.addicon .json.string}
        * Name: The type of world/universe to generate. Doesn't exists if `Type` is HytaleGenerator.
        {.addicon .json.string}
        * Version: Currently unknown. Always `0.0.0`. Doesn't exists if `Type` is HytaleGenerator.
        {.addicon .json.string}
    * WorldMap: Currently unknown.
    {.addicon .json.object}
        * Type: Currently unknown. Always `WorldGen`.
        {.addicon .json.string}
    * ChunkStorage: The worlds chunk storage information.
    {.addicon .json.object}
        * Type: The worlds chunk storage type. Either `Hytale` or `RocksDb`.
        {.addicon .json.string}
    * ChunkConfig: Currently unknown.
    {.addicon .json.object}
    * IsTicking: `true` if the world ticks normally.
    {.addicon .json.boolean}
    * IsBlockTicking: `true` if blocks can get ticked. i.e: Crops growing.
    {.addicon .json.boolean}
    * IsPvpEnabled: `true` if PVP is enabled.
    {.addicon .json.boolean}
    * IsFallDamagedEnabled: `true` if fall damage is enabled.
    {.addicon .json.boolean}
    * IsGameTimePaused: `true` if the daynight cycle is paused.
    {.addicon .json.boolean}
    * GameTime: The current in-game date and time in the format: `<yyyy>-<MM>-<dd>T<HH>:<mm>:<ss>Z`. Example `0001-01-01T00:00:00Z`.
    {.addicon .json.string}
    * ClientEffects: Information for different client effects.
    {.addicon .json.object}
        * SunHeightPercent: Controls how high the sun can get in the sky.
        {.addicon .json.float}
        * SunAngleDegrees: Controls the angle of the sun.
        {.addicon .json.float}
        * BloomIntensity: Controls the sun bloom effect intensity.
        {.addicon .json.float}
        * BloomPower: Controls the sun bloom effect power.
        {.addicon .json.float}
        * SunIntensity: Controls the brightness intensity of the sun.
        {.addicon .json.float}
        * SunshaftIntensity: Controls the brightness intensity of the sun shafts.
        {.addicon .json.float}
        * SunshaftScaleFactor: Controls the scale of the sun shafts.
        {.addicon .json.float}
    * RequiredPlugins: Currently unknown.
    {.addicon .json.object}
    * GameMode: The default gamemode for this world.
    {.addicon .json.string}
    * IsSpawningNPC: `true` if npcs can spawn in naturally.
    {.addicon .json.boolean}
    * IsSpawnMarkersEnabled: `true` if the world spawn point has a marker on the world map and compass.
    {.addicon .json.boolean}
    * IsAllNPCFrozen: `true` if all npcs have their AI paused.
    {.addicon .json.boolean}
    * GameplayConfig: Currently unknown. Always `Default`.
    {.addicon .json.string}
    * Death: Information for what happens when a player dies.
    {.addicon .json.object}
        * RespawnController: Controls where the player should respawn.
        {.addicon .json.object}
            * Type: The id of the respawn location type. Known types: `HomeOrSpawnPoint`.
            {.addicon .json.string}
        * ItemsLossMode: The inventory penalty on death mode. One of `None` = None, `All` = Drop All, or `Configured` = Partial Drop.
        {.addicon .json.string}
        * ItemsAmountLossPercentage: The percentage of the players resources loss on death. Only applies if `ItemsLossMode` is Configured.
        {.addicon .json.float}
        * ItemsDurabilityLossPercentage: The percentage of item durability loss on death. Only applies if `ItemsLossMode` is Configured.
        {.addicon .json.float}
    * DaytimeDurationSeconds: How long in seconds the day lasts. Doesn't exists if `IsGameTimePaused` is true.
    {.addicon .json.int}
    * NighttimeDurationSeconds: How long in seconds the night lasts. Doesn't exists if `IsGameTimePaused` is true.
    {.addicon .json.int}
    * IsCompassUpdating: `true` if the player's compass update.
    {.addicon .json.boolean}
    * IsSavingPlayers: `true` if changes to player data saves to disk.
    {.addicon .json.boolean}
    * IsSavingChunks: `true` if changes to chunks are saved to disk.
    {.addicon .json.boolean}
    * SaveNewChunks: `true` if newly generated chunks are saved to disk.
    {.addicon .json.boolean}
    * IsUnloadingChunks: `true` if chunks can be unloaded.
    {.addicon .json.boolean}
    * IsObjectiveMarkersEnabled: Currently unknown.
    {.addicon .json.boolean}
    * DeleteOnUniverseStart: `true` if this world should be deleted and regenerated when started.
    {.addicon .json.boolean}
    * DeleteOnRemove: Currently unknown.
    {.addicon .json.boolean}
    * ResourceStorage: Currently unknown.
    {.addicon .json.object}
        * Type: Currently unknown. Always `Hytale`.
        {.addicon .json.string}
    * Plugin: Information related to plugins, custom and built-in.
    {.addicon .json.object}
        * CreativeHub: Contains information related to the Creative mode hub.
        {.addicon .json.object}
            * StartupInstance: The initial instance used for the Creative mode hub. Always `CreativeHub`.
            {.addicon .json.string}

</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-dcad8778f</th>
            <td>The world config format is introduced.</td>
        </tr>
    </tbody>
</table>
