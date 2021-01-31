<template>
    <v-container>
        <v-container>
            <v-btn
                class="mx-2"
                fab
                dark
                color="indigo"
                @click="addNewLocation('Toilet')"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
            <span>Add Location</span>
        </v-container>
        <v-expansion-panels
            multiple
            accordion
            :value="expandedPanels"
            v-for="(location, $locationIndex) in quote"
            :key="$locationIndex"
            style="margin-bottom: 1rem;"
        >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h1>{{ location.location }}</h1>
                </v-expansion-panel-header>
                <v-container>
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="indigo"
                        @click="addNewTrade('Capentary', $locationIndex)"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                    <span>Add Trade</span>
                </v-container>
                <v-expansion-panel-content>
                    <v-expansion-panel
                        v-for="(trade, $tradeIndex) in location.trade"
                        :key="$tradeIndex"
                    >
                        <v-expansion-panel-header>
                            <h2>{{ trade.name }}</h2>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content
                            v-for="(item, $itemIndex) in trade.items"
                            :key="$itemIndex"
                        >
                            <v-card style="padding:1rem;">
                                <v-simple-table>
                                    <thead>
                                        <tr>
                                            <th width="50%">
                                                <h2>{{ item.item }}</h2>
                                            </th>
                                            <th>
                                                <v-chip label color="red">
                                                    Dimension
                                                </v-chip>
                                            </th>
                                            <th>
                                                <v-chip label color="yellow">
                                                    Unit Rate
                                                </v-chip>
                                            </th>
                                            <th>
                                                <v-chip label color="blue">
                                                    Price
                                                </v-chip>
                                            </th>
                                            <th>
                                                <v-chip label color="primary">
                                                    Cost and Profit
                                                </v-chip>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Price
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-card>
                            <v-card outlined>
                                <v-simple-table>
                                    <thead>
                                        <tr>
                                            <th width="50%">Line Items</th>
                                            <th width="14%">Quantity</th>
                                            <th width="12%">Unit</th>
                                            <th>Unit Cost</th>
                                            <th>Total Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        v-for="(lineItem,
                                        $lineItemIndex) in item.lineItems"
                                        :key="$lineItemIndex"
                                    >
                                        <tr>
                                            <td>{{ lineItem.description }}</td>
                                            <td>{{ lineItem.qty }}</td>
                                            <td>{{ lineItem.unit }}</td>
                                            <td>{{ lineItem.unitPrice }}</td>
                                            <td>
                                                {{
                                                    lineItem.qty *
                                                        lineItem.unitPrice
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-card>
                        </v-expansion-panel-content>
                        <v-container>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                color="indigo"
                                @click="
                                    addNewLineItem(
                                        'Supply labour and materials to install screed levelling and waterproofing',
                                        $locationIndex,
                                        $tradeIndex
                                    )
                                "
                            >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                            <span>Add Line Item</span>
                        </v-container>
                    </v-expansion-panel>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import { uuid } from "../utils"

export default {
    data() {
        return {
            expandedPanels: [0, 1],
            quote: [
                {
                    location: "Kitchen",
                    id: 123,
                    trade: [
                        {
                            name: "Masonry Works",
                            items: [
                                {
                                    item: "Floor tiling",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        addNewLocation(locationName) {
            this.quote.push({
                location: locationName,
                id: uuid(),
                trade: []
            })
        },
        addNewTrade(tradeName, idx) {
            this.quote[idx].trade.unshift({
                name: tradeName,
                items: [
                    {
                        item: "Insert Line Item Name",
                        id: uuid(),
                        lineItems: []
                    }
                ]
            })
        },
        addNewLineItem(lineItemName, locationIdx, tradeIdx) {
            this.quote[locationIdx].trade[tradeIdx].items.unshift({
                item: "Floor tiling",
                id: 123,
                lineItems: [
                    {
                        id: "1",
                        description:
                            "Supply labour and materials to install screed levelling and waterproofing",
                        unit: "ft",
                        unitPrice: 8,
                        qty: 120
                    }
                ]
            })
        }
    }
}
</script>
