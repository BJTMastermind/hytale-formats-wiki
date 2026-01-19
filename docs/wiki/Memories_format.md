# Memories.json format

The **memories.json** file is used to store the players found "Memories", which are NPCs found throughout the world.

## JSON format

<div markdown="1" id="treeview">
* : Root object.
{.addicon .json.object}
    * Memories: Array that holds all memory entries.
    {.addicon .json.array}
        * : A memory entry.
        {.addicon .json.object}
            * Id: The memory type id. Currently always "NPC".
            {.addicon .json.string}
            * NPCRole: The id of the NPC that was found.
            {.addicon .json.string}
            * TranslationKey: The translation key for the name of this NPC.
            {.addicon .json.string}
            * IsMemoriesNameOverridden: Unknown. Always `false`.
            {.addicon .json.boolean}
            * CapturedTimestamp: The unix timestamp of when this NPC was found.
            {.addicon .json.int}
            * FoundLocationNameKey: Where this NPC was found.
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
            <td>The memories format is introduced.</td>
        </tr>
    </tbody>
</table>
