# Barter Shop State format

The **barter_shop_state.json** file is used to track shop/merchant current stock and restock times.

## JSON format

<div markdown="1" id="treeview">

* : Root object.
{.addicon .json.object}
    * Shops: Contains restock data for all shops found.
    {.addicon .json.object}
        * <Shop_Name\>: A shop/merchant.
        {.addicon .json.object}
            * Stock: Array of ints indicating how much stock is avalible for each item available for trade.
            {.addicon .json.array}
                * : How much stock there is for the shop item with the same index.
                {.addicon .json.int}
            * NextRefresh: The in-game date and time of when the next stock refresh is. In the format of `<YYYY>-<MM>-<DD>T<HH>:<MM>:<SS>Z`.
            {.addicon .json.string}
            * ResolveSeed: A random seed for the shop.
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
            <td>The barter shop state format is introduced.</td>
        </tr>
    </tbody>
</table>
