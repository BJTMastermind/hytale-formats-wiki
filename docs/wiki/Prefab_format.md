# Prefab format

**<name\>.prefab.json** files are used to save and export player made structures/prefabs, allowing players to then paste the prefab in to another world or another universe within the same world.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * version: The format version used at time of saving.
    {.addicon .json.int}
    * blockIdVersion: The block Id version used at time of saving.
    {.addicon .json.int}
    * anchorX: The X coordinate anchor or origin point relative to the prefabs area. 0 being the center of the prefab area.
    {.addicon .json.int}
    * anchorY: The Y coordinate anchor or origin point relative to the prefabs area. 0 being the bottom layer of the prefab area.
    {.addicon .json.int}
    * anchorZ: The Z coordinate anchor or origin point relative to the prefabs area. 0 being the center of the prefab area.
    {.addicon .json.int}
    * blocks: The list of all non-Empty blocks in the prefab. Saved from the bottom North-West corner to the top South-East corner.
    {.addicon .json.array}
        * : A block entry.
        {.addicon .json.object}
            * x: The prefab relative X position of this block.
            {.addicon .json.int}
            * y: The prefab relative Y position of this block.
            {.addicon .json.int}
            * z: The prefab relative Z position of this block.
            {.addicon .json.int}
            * name: The block id.
            {.addicon .json.string}
            * components: The component data for this block. May not exist.
            {.addicon .json.object}
            * support: The support distance level of this block. May not exist.
            {.addicon .json.int}
            * filler: The filler value, may be a bit field (Unconfirmed). May not exist.
            {.addicon .json.int}
            * rotation: The rotation value of this block. May not exist.
            {.addicon .json.int}
    * fluids: The list of all fluids in the prefab. Saved from the bottom North-West corner to the top South-East corner.
    {.addicon .json.array}
        * : A fluid entry.
        {.addicon .json.object}
            * x: The prefab relative X position of this fluid.
            {.addicon .json.int}
            * y: The prefab relative Y position of this fluid.
            {.addicon .json.int}
            * z: The prefab relative Z position of this fluid.
            {.addicon .json.int}
            * name: The fluid id.
            {.addicon .json.string}
            * level: The fluids level.
            {.addicon .json.int}

</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-dcad8778f</th>
            <td>The prefab format is introduced.</td>
        </tr>
    </tbody>
</table>
