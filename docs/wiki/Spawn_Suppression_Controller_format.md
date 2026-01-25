# Spawn Suppression Controller format

The **SpawnSuppressionController.json** file is used to prevent NPCs from spawning in a given area in the world.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * SpawnSuppressorMap: Contains all spawn suppression controllers.
    {.addicon .json.object}
        * <uuid\>: A spawn suppression controller.
        {.addicon .json.object}
            * Position: Contains the center position of this spawn suppressor.
            {.addicon .json.object}
                * X: The center X position of this spawn suppressor.
                {.addicon .json.float}
                * Y: The center Y position of this spawn suppressor.
                {.addicon .json.float}
                * Z: The center Z position of this spawn suppressor.
                {.addicon .json.float}
            * Suppression: The suppression type. Also determines the range of the spawn suppressor. Known types: `Spawn_Camp`.
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
            <td>The spawn suppression controller format is introduced.</td>
        </tr>
    </tbody>
</table>
