# World Config format

The **worlds/.../config.json** file contains global information about the world such as the time of day, the level generator used, and the seed.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * Version:
    {.addicon .json.int}
    * UUID:
    {.addicon .json.object}
        * $binary:
        {.addicon .json.string}
        * $type:
        {.addicon .json.string}
    * DisplayName:
    {.addicon .json.string}
    * Seed:
    {.addicon .json.int}
    * WorldGen:
    {.addicon .json.object}
        * Type:
        {.addicon .json.string}
        * Name:
        {.addicon .json.string}
    * WorldMap:
    {.addicon .json.object}
        * Type:
        {.addicon .json.string}
    * ChunkStorage:
    {.addicon .json.object}
        * Type:
        {.addicon .json.string}
    * ChunkConfig:
    {.addicon .json.object}
    * IsTicking:
    {.addicon .json.boolean}
    * IsBlockTicking:
    {.addicon .json.boolean}
    * IsPvpEnabled:
    {.addicon .json.boolean}
    * IsFallDamagedEnabled:
    {.addicon .json.boolean}
    * IsGameTimePaused:
    {.addicon .json.boolean}
    * GameTime:
    {.addicon .json.string}
    * ClientEffects:
    {.addicon .json.object}
        * SunHeightPercent:
        {.addicon .json.float}
        * SunAngleDegrees:
        {.addicon .json.float}
        * BloomIntensity:
        {.addicon .json.float}
        * BloomPower:
        {.addicon .json.float}
        * SunIntensity:
        {.addicon .json.float}
        * SunshaftIntensity:
        {.addicon .json.float}
        * SunshaftScaleFactor:
        {.addicon .json.float}
    * RequiredPlugins:
    {.addicon .json.object}
    * GameMode:
    {.addicon .json.string}
    * IsSpawningNPC:
    {.addicon .json.boolean}
    * IsSpawnMarkersEnabled:
    {.addicon .json.boolean}
    * IsAllNPCFrozen:
    {.addicon .json.boolean}
    * GameplayConfig:
    {.addicon .json.string}
    * Death:
    {.addicon .json.object}
        * RespawnController:
        {.addicon .json.object}
            * Type:
            {.addicon .json.string}
        * ItemsLossMode:
        {.addicon .json.string}
        * ItemsAmountLossPercentage:
        {.addicon .json.float}
        * ItemsDurabilityLossPercentage:
        {.addicon .json.float}
    * DaytimeDurationSeconds:
    {.addicon .json.int}
    * NighttimeDurationSeconds:
    {.addicon .json.int}
    * IsCompassUpdating:
    {.addicon .json.boolean}
    * IsSavingPlayers:
    {.addicon .json.boolean}
    * IsSavingChunks:
    {.addicon .json.boolean}
    * SaveNewChunks:
    {.addicon .json.boolean}
    * IsUnloadingChunks:
    {.addicon .json.boolean}
    * IsObjectiveMarkersEnabled:
    {.addicon .json.boolean}
    * DeleteOnUniverseStart:
    {.addicon .json.boolean}
    * DeleteOnRemove:
    {.addicon .json.boolean}
    * ResourceStorage:
    {.addicon .json.object}
        * Type:
        {.addicon .json.string}
    * Plugin:
    {.addicon .json.object}
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
