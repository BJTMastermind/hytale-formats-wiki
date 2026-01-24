# Client Metadata format

The **client_metadata.json** file is used to track what patchline the world was last loaded with. If the patchline is different from what the world was last loaded with the game will display a message warning you that loading the world on a different patchline could break things, with an option to create a backup before entering the world.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * CreatedWithPatchline: The patchline the world was last loaded with. Either "release" or "pre-release".
    {.addicon .json.string}
</div>

## History

<table id="table">
    <tbody>
        <tr>
            <th colspan="8"><p>Early Access</p></th>
        </tr>
        <tr>
            <th>?</th>
            <td>The client metadata format is introduced.</td>
        </tr>
    </tbody>
</table>
