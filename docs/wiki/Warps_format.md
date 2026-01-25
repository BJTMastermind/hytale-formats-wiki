# Warps format

The **warps.json** file is used to track all warp locations.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * Warps: Array of warp locations.
    {.addicon .json.array}
        * : A warp location.
        {.addicon .json.object}
            * Id: The name of this warp location.
            {.addicon .json.string}
            * World: The world id that this warp location is in.
            {.addicon .json.string}
            * Creator: The creator of this warp location. Currently always `*Teleporter`.
            {.addicon .json.string}
            * CreationDate: The date and time this warp location was created.
            {.addicon .json.string}
            * X: The X position the player warps to when traveling to this location.
            {.addicon .json.float}
            * Y: The Y position the player warps to when traveling to this location.
            {.addicon .json.float}
            * Z: The Z position the player warps to when traveling to this location.
            {.addicon .json.float}
            * Yaw: The direction the player is looking when warped to this location.
            {.addicon .json.float}
</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-dcad8778f</th>
            <td>The warp format is introduced.</td>
        </tr>
    </tbody>
</table>
