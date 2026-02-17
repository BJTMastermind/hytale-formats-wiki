# Block Map Markers format

The **BlockMapMarkers.json** file is used to track the map markers, such as the Forgotten Temple.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * Markers: Contains all the block map markers.
    {.addicon .json.object}
        * <19_digits\>: A 19 digit key/id of the map marker.
        {.addicon .json.object}
            * Position: Contains the position of this map marker.
            {.addicon .json.object}
                * X: The X position of this map marker.
                {.addicon .json.int}
                * Y: The Y position of this map marker.
                {.addicon .json.int}
                * Z: The Z position of this map marker.
                {.addicon .json.int}
            * Name: The translation key of the name for this map marker.
            {.addicon .json.string}
            * Icon: The icon to use for this map marker. Looks for this filename in: `Assets.zip/Common/UI/WorldMap/MapMarkers/`.
            {.addicon .json.string}
            * MarkerId: The uuid string id of this map marker.
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
            <td>The block counter format is introduced.</td>
        </tr>
    </tbody>
</table>
