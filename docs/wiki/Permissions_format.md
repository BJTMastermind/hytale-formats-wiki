# Permissions format

The **permissions.json** file is used to track the permissions of all the players in the world/server.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * users: Object of all players and their permissions.
    {.addicon .json.object}
        * <uuid\>: The players permission object.
        {.addicon .json.object}
            * groups: The permission groups this player is included in.
            {.addicon .json.array}
                * : A permission group name. Defaults to `Adventure`. Default groups are `Advanture`, `Creative`, and `OP`. Can be a custom group name.
                {.addicon .json.string}
    * groups: Contains the permission groups and the permissions they allow.
    {.addicon .json.object}
        * Default: The default permissions. (No permissions)
        {.addicon .json.array}
            * : A permission this group allows. Defaults to empty meaning none.
            {.addicon .json.string}
        * OP: The op/admin permissions. (All permissions)
        {.addicon .json.array}
            * : A permission this group allows. Defaults to `*` meaning all.
            {.addicon .json.string}
        * <Custom_Group_Name\>: A player defined permission group.
        {.addicon .json.array}
            * : A permission this group allows. Can be a custom permission.
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
            <td>The permissions format is introduced.</td>
        </tr>
    </tbody>
</table>
