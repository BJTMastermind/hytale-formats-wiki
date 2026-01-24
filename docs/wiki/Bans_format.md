# Bans format

The **bans.json** file is used to track the players that are banned from this world/server.

## JSON format

<div markdown="1" id="treeview">
* : Root array.
{.addicon .json.array}
    * : A banned player object.
    {.addicon .json.object}
        * type: The type of ban for this player. Currently always "infinite".
        {.addicon .json.string}
        * target: This banned players uuid.
        {.addicon .json.string}
        * by: The uuid of the admin that banned this player.
        {.addicon .json.string}
        * timestamp: The unix timestamp of when this player was banned.
        {.addicon .json.int}
        * reason: The reason message given for the ban. (Currently unused)
        {.addicon .json.string}
</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>2026.01.13-50e69c385</th>
            <td>The ban format is introduced.</td>
        </tr>
    </tbody>
</table>
