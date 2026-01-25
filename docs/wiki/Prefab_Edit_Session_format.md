# Prefab Edit Session format

The **PrefabEditSession.json** file is used for storing prefab data.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * SpawnPoint: The spawn point of the prefab.
    {.addicon .json.array}
        * : The X position.
        {.addicon .json.int}
        * : The Y position.
        {.addicon .json.int}
        * : The Z position.
        {.addicon .json.int}
    * LoadedPrefabMetadata: Unknown.
    {.addicon .json.array}
</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-dcad8778f</th>
            <td>The prefab edit session format is introduced.</td>
        </tr>
    </tbody>
</table>
