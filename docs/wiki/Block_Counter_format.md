# Block Counter format

The **BlockCounter.json** file is used to track how many of a limited block have been placed in the world.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * BlockPlacmentCounts: Contains all the block counters.
    {.addicon .json.object}
        * Teleporters: The amount of teleporters in this world. Absent if none.
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
            <td>The block counter format is introduced.</td>
        </tr>
    </tbody>
</table>
