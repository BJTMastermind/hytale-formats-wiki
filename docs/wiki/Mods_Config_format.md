# Mods Config format

The **/config.json** file stores a list of all mods avablible for the world and which ones are enabled or not for a given world.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * Mods: Holds all the loaded mods.
    {.addicon .json.object}
        * <author\>:<modName\>: The mod id.
        {.addicon .json.object}
            * Enabled: `true` if the mod is enabled for this world, otherwise `false`.
            {.addicon .json.boolean}

</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-dcad8778f</th>
            <td>The mods config format is introduced.</td>
        </tr>
    </tbody>
</table>
