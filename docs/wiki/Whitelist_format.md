# Whitelist format

The **whitelist.json** file is used to track what players are allowed to enter the server.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * enabled: `true` if the whitelist is enabled. Defaults to `false`.
    {.addicon .json.boolean}
    * list: List of whitelisted player uuids.
    {.addicon .json.array}
        * : A whitelisted player uuid.
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
            <td>The whitelist format is introduced.</td>
        </tr>
    </tbody>
</table>
