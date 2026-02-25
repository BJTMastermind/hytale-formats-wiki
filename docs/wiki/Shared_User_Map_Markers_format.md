# Shared User Map Markers format

**SharedUserMapMarkers.json** is used to track user defined map markers that are shared with other players.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * UserMarkers: Contains all player made map markers that are shared with other players.
    {.addicon .json.array}
        * : A custom map marker.
        {.addicon .json.object}
            * Id: The id of this marker. Has the format of `user_shared_<uuid>`.
            {.addicon .json.string}
            * X: The X position of this map marker.
            {.addicon .json.float}
            * Z: The Z position of this map marker.
            {.addicon .json.float}
            * Name: The name of this map marker.
            {.addicon .json.string}
            * Icon: The icon file name for this map marker.
            {.addicon .json.string}
            * ColorTint: The hex tint color to apply to the marker icon.
            {.addicon .json.string}
            * CreatedByUuid: The UUID of the player who created this map marker stored in binary form encoded in base64.
            {.addicon .json.object}
                * $binary: The base64 encoded binary UUID value.
                {.addicon .json.string}
                * $type: The BSON binary type. Always `04` for UUID.
                {.addicon .json.string}
            * CreatedByName: The name of the player who created this map marker.
            {.addicon .json.string}

</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th rowspan="2">2026.02.17-255364b8e</th>
            <td>The shared user map markers format is introduced.</td>
        </tr>
        <tr>
            <td>Used to track user defined map markers that are shared with other players.</td>
        </tr>
    </tbody>
</table>