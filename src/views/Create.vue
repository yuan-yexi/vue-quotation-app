<template>
    <v-container>
        <v-container>
            <v-btn class="mx-2" fab dark color="red" @click="addNewLocation">
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
            <span>Add Location</span>
        </v-container>
        <v-expansion-panels popout multiple v-model="expandedPanel">
            <v-expansion-panel
                v-for="(location, $locationIndex) in quotes.quote"
                :key="$locationIndex"
            >
                <v-container>
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="teal"
                        @click="addNewTrade($locationIndex)"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                    <span>Add Trade</span>
                </v-container>
                <v-expansion-panel-header>
                    <v-text-field
                        outlined
                        label="Location"
                        hint="Add the location of the project e.g. Kitchen, Bathroom 1"
                        v-model="location.location"
                    ></v-text-field>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card
                        v-for="(trade, $tradeIndex) in location.trades"
                        :key="$tradeIndex"
                    >
                        <v-toolbar style="height: 100px;" color="teal" dark>
                            <div style="height: 0px;">
                                <v-text-field
                                    v-model="trade.name"
                                    label="Name of Trade"
                                ></v-text-field>
                            </div>
                        </v-toolbar>
                        <v-list>
                            <v-list-group
                                v-for="(item, $itemIndex) in trade.items"
                                :key="$itemIndex"
                                v-model="activePanel"
                            >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            <v-text-field
                                                v-model="item.item"
                                                label="Add component name"
                                            ></v-text-field>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </template>
                                <v-list-item
                                    v-for="(lineItem,
                                    $lineItemIndex) in item.lineItems"
                                    :key="$lineItemIndex"
                                >
                                    <template>
                                        <v-container>
                                            <v-row
                                                no-gutters
                                                style="margin: 1rem;"
                                            >
                                                <v-col
                                                    cols="12"
                                                    sm="5"
                                                    style="margin-right: 10px;"
                                                >
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            <v-text-field
                                                                v-model="
                                                                    lineItem.description
                                                                "
                                                                label="Line item description"
                                                            ></v-text-field>
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-col>
                                                <v-col cols="12" sm="1">
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            <v-text-field
                                                                filled
                                                                rounded
                                                                dense
                                                                v-model="
                                                                    lineItem.qty
                                                                "
                                                                label="Price"
                                                            ></v-text-field>
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-col>
                                                <v-col cols="12" sm="1">
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            <v-select
                                                                :items="items"
                                                                filled
                                                                rounded
                                                                dense
                                                                v-model="
                                                                    lineItem.unit
                                                                "
                                                                label="Unit"
                                                            ></v-select>
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-col>
                                                <v-col cols="12" sm="1">
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            <v-text-field
                                                                filled
                                                                rounded
                                                                dense
                                                                v-model="
                                                                    lineItem.unitPrice
                                                                "
                                                                label="Qty"
                                                            ></v-text-field>
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-col>
                                                <v-col cols="12" sm="1">
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            <v-chip
                                                                large
                                                                style="width:100px;"
                                                                color="green"
                                                                text-color="white"
                                                            >
                                                                ${{
                                                                    lineItem.total
                                                                }}
                                                            </v-chip>
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-col>
                                                <v-col cols="12" sm="">
                                                    <div
                                                        style="margin: 1.5rem;"
                                                    >
                                                        <v-slider
                                                            v-model="value"
                                                            step="10"
                                                            thumb-label="always"
                                                            ticks
                                                        ></v-slider>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </template>
                                </v-list-item>
                                <v-container>
                                    <v-btn
                                        class="mx-2"
                                        fab
                                        dark
                                        color="blue"
                                        @click="
                                            addNewLineItem(
                                                $locationIndex,
                                                $tradeIndex,
                                                $itemIndex
                                            )
                                        "
                                    >
                                        <v-icon dark>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                    <span>Add Line Item</span>
                                </v-container>
                            </v-list-group>
                        </v-list>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import { mapState } from "vuex"
import { uuid } from "../utils"

export default {
    data() {
        return {
            activePanel: true,
            expandedPanel: [0],
            items: ["sqft", "m"]
        }
    },
    computed: {
        ...mapState(["quotes"])
    },
    methods: {
        addNewLocation() {
            this.quotes.quote.push({
                location: "New Location",
                id: uuid(),
                trades: []
            })
        },
        addNewTrade(idx) {
            this.quotes.quote[idx].trades.push({
                name: "New Trade",
                items: [
                    {
                        item: "Insert Line Item Name",
                        id: uuid(),
                        lineItems: []
                    }
                ]
            })
            this.expandedPanel = [idx]
        },
        addNewLineItem(locationIdx, tradeIdx, itemIdx) {
            this.quotes.quote[locationIdx].trades[tradeIdx].items[
                itemIdx
            ].lineItems.push({
                id: uuid(),
                description: "Line item description",
                unit: "ft",
                unitPrice: 0,
                qty: 0,
                total: 0
            })
        }
    }
}
</script>
