<template>
    <v-container>
        <v-container>
            <v-btn
                class="mx-2"
                fab
                dark
                color="cyan darken-4"
                @click="addNewLocation"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
            <span>Add Location</span>
        </v-container>

        <!-- ADD NEW LOCATION SECTION -->
        <v-expansion-panels popout multiple v-model="expandedPanel">
            <v-expansion-panel
                v-for="(location, $locationIndex) in quotes.quote"
                :key="$locationIndex"
            >
                <v-expansion-panel-header
                    color="cyan darken-4"
                    style="margin-bottom: 1rem;"
                >
                    <v-text-field
                        outlined
                        label="Location"
                        hint="Add the location of the project e.g. Kitchen, Bathroom 1"
                        v-model="location.location"
                        color="white"
                        dark
                    ></v-text-field>
                </v-expansion-panel-header>
                <v-container>
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="cyan darken-2"
                        @click="addNewTrade($locationIndex)"
                    >
                        <v-icon dark>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                    <span>Add Trade</span>
                </v-container>

                <!-- ADD TRADE SECTION -->
                <v-expansion-panel-content>
                    <v-card
                        v-for="(trade, $tradeIndex) in location.trades"
                        :key="$tradeIndex"
                        style="margin-bottom: 1rem;"
                    >
                        <v-toolbar
                            style="height: 100px;"
                            color="cyan darken-2"
                            dark
                        >
                            <div style="height: 0px;">
                                <v-text-field
                                    v-model="trade.name"
                                    label="Name of Trade"
                                ></v-text-field>
                            </div>
                        </v-toolbar>

                        <v-container>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                color="cyan darken-1"
                                @click="
                                    addNewComponent($locationIndex, $tradeIndex)
                                "
                            >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                            <span>Add Component</span>
                        </v-container>

                        <!-- ADD NEW COMPONENT SECTION -->
                        <v-container
                            v-for="(item, $itemIndex) in trade.components"
                            :key="$itemIndex"
                        >
                            <!-- COMPONENT SUMMARY -->
                            <v-container>
                                <v-row no-gutters>
                                    <v-col
                                        cols="12"
                                        sm="4"
                                        style="margin-right: 10px;"
                                    >
                                        <v-text-field
                                            outlined
                                            v-model="item.name"
                                            label="Add component name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="1">
                                        <v-text-field
                                            filled
                                            rounded
                                            dense
                                            v-model="item.componentQty"
                                            label="Qty"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="1">
                                        <v-select
                                            :items="items"
                                            filled
                                            rounded
                                            dense
                                            v-model="item.componentUnit"
                                            label="Unit"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="1">
                                        <v-text-field
                                            filled
                                            rounded
                                            dense
                                            v-model="item.componentUnitPrice"
                                            label="UnitPrice"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="1">
                                        <v-text-field
                                            filled
                                            rounded
                                            dense
                                            v-model="item.componentPrice"
                                            readonly
                                            label="Price"
                                        ></v-text-field>
                                        <div style="visibility: hidden;">
                                            {{
                                                calComponentPrice(
                                                    item.componentQty,
                                                    item.componentUnitPrice,
                                                    item.componentMarkUp,
                                                    $locationIndex,
                                                    $tradeIndex,
                                                    $itemIndex
                                                )
                                            }}
                                        </div>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm=""
                                        style="margin-left: 0.5rem;"
                                    >
                                        <v-card
                                            class="rounded-xl"
                                            color="blue-grey lighten-5"
                                            elevation="0"
                                        >
                                            <v-card-text>
                                                <v-row>
                                                    <v-col>
                                                        <v-row>
                                                            <v-col>
                                                                <div>
                                                                    <v-text-field
                                                                        filled
                                                                        v-model="
                                                                            item.componentMarkUp
                                                                        "
                                                                        label="MarkUp%"
                                                                    ></v-text-field>
                                                                </div>
                                                            </v-col>
                                                            <v-col>
                                                                <div
                                                                    style="margin-top: 1.5rem;"
                                                                >
                                                                    <v-slider
                                                                        v-model="
                                                                            item.componentMarkUp
                                                                        "
                                                                        step="1"
                                                                        thumb-label="always"
                                                                        color="blue-grey darken-2"
                                                                        ticks
                                                                    ></v-slider>
                                                                </div>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                    <v-col>
                                                        <v-chip
                                                            color="blue darken-4"
                                                            label
                                                            outlined
                                                            class="ma-1"
                                                            style="width: 175px"
                                                        >
                                                            Total Price: $
                                                            {{
                                                                calComponentGrandTotal(
                                                                    item
                                                                )
                                                                    | formatCurrency
                                                            }}
                                                        </v-chip>
                                                        <v-chip
                                                            color="orange darken-4"
                                                            label
                                                            outlined
                                                            class="ma-1"
                                                            style="width: 175px"
                                                        >
                                                            Total Cost: $
                                                            {{
                                                                calComponentGrandTotalCost(
                                                                    item
                                                                )
                                                                    | formatCurrency
                                                            }}
                                                        </v-chip>
                                                        <v-chip
                                                            color="light-green darken-4"
                                                            label
                                                            outlined
                                                            class="ma-1"
                                                            style="width: 175px"
                                                        >
                                                            Total Profit: $
                                                            {{
                                                                (calComponentGrandTotal(
                                                                    item
                                                                ) -
                                                                    calComponentGrandTotalCost(
                                                                        item
                                                                    ))
                                                                    | formatCurrency
                                                            }}
                                                        </v-chip>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-divider></v-divider>

                            <!-- ADD NEW LINE ITEMS SECTION -->
                            <v-container
                                v-for="(lineItem,
                                $lineItemIndex) in item.lineItems"
                                :key="$lineItemIndex"
                            >
                                <v-row
                                    no-gutters
                                    style="margin-bottom: 0.5rem;"
                                >
                                    <v-col
                                        cols="12"
                                        sm="4"
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
                                                    v-model="lineItem.qty"
                                                    label="Qty"
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
                                                    v-model="lineItem.unit"
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
                                                    prefix="$"
                                                    v-model="lineItem.unitPrice"
                                                    label="UnitPrice"
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
                                                    v-model="lineItem.total"
                                                    prefix="$"
                                                    readonly
                                                    label="Price"
                                                ></v-text-field>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm=""
                                        style="margin-left: 0.5rem;"
                                    >
                                        <v-card
                                            class="rounded-xl"
                                            color="deep-purple lighten-5"
                                            elevation="0"
                                        >
                                            <v-card-text>
                                                <v-row>
                                                    <v-col>
                                                        <div>
                                                            <v-text-field
                                                                filled
                                                                v-model="
                                                                    lineItem.markup
                                                                "
                                                                label="MarkUp%"
                                                            ></v-text-field>
                                                        </div>
                                                    </v-col>
                                                    <v-col>
                                                        <div
                                                            style="margin-top: 1.5rem;"
                                                        >
                                                            <v-slider
                                                                v-model="
                                                                    lineItem.markup
                                                                "
                                                                step="1"
                                                                thumb-label="always"
                                                                color="blue-grey darken-2"
                                                                ticks
                                                            ></v-slider>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <div>
                                                            <v-chip
                                                                color="blue darken-4"
                                                                label
                                                                outlined
                                                                class="ma-1"
                                                                style="width: 175px"
                                                            >
                                                                Price: ${{
                                                                    calLineItemTotal(
                                                                        lineItem.qty,
                                                                        lineItem.unitPrice,
                                                                        lineItem.markup,
                                                                        $locationIndex,
                                                                        $tradeIndex,
                                                                        $itemIndex,
                                                                        $lineItemIndex
                                                                    )
                                                                        | formatCurrency
                                                                }}
                                                            </v-chip>
                                                            <v-chip
                                                                color="orange darken-4"
                                                                label
                                                                outlined
                                                                class="ma-1"
                                                                style="width: 175px"
                                                            >
                                                                Cost: $
                                                                {{
                                                                    calLineItemTotalCost(
                                                                        lineItem.qty,
                                                                        lineItem.unitCost,
                                                                        $locationIndex,
                                                                        $tradeIndex,
                                                                        $itemIndex,
                                                                        $lineItemIndex
                                                                    )
                                                                        | formatCurrency
                                                                }}
                                                            </v-chip>
                                                            <v-chip
                                                                color="light-green darken-4"
                                                                label
                                                                outlined
                                                                class="ma-1"
                                                                style="width: 175px"
                                                            >
                                                                Profit: $
                                                                {{
                                                                    (calLineItemTotal(
                                                                        lineItem.qty,
                                                                        lineItem.unitPrice,
                                                                        lineItem.markup,
                                                                        $locationIndex,
                                                                        $tradeIndex,
                                                                        $itemIndex,
                                                                        $lineItemIndex
                                                                    ) -
                                                                        calLineItemTotalCost(
                                                                            lineItem.qty,
                                                                            lineItem.unitCost,
                                                                            $locationIndex,
                                                                            $tradeIndex,
                                                                            $itemIndex,
                                                                            $lineItemIndex
                                                                        ))
                                                                        | formatCurrency
                                                                }}
                                                            </v-chip>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-container>
                                <v-btn
                                    class="mx-1"
                                    fab
                                    dark
                                    color="teal lighten-2"
                                    x-small
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
                        </v-container>
                        <!-- ADD NEW COMPONENT SECTION END -->
                    </v-card>
                    <v-container v-if="location.trades.length > 1">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            color="cyan darken-2"
                            @click="addNewTrade($locationIndex)"
                        >
                            <v-icon dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                        <span>Add Trade</span>
                    </v-container>
                </v-expansion-panel-content>
                <!-- ADD TRADE SECTION END -->
            </v-expansion-panel>
        </v-expansion-panels>
        <!-- ADD NEW LOCATION SECTION END -->
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
            items: ["sqft", "m", "flat"]
        }
    },
    computed: {
        ...mapState(["quotes", "costBook"])
    },
    filters: {
        formatCurrency(val) {
            if (!val) return 0
            return val
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    },
    methods: {
        /* Functions to calculate prices*/
        /* Calculate total price of each individual line item */
        calLineItemTotal(
            qty,
            price,
            markup,
            locationIndex,
            tradeIndex,
            itemIndex,
            lineItemIndex
        ) {
            const total = qty * price
            const markupValue = total * markup * 0.01
            const totalPrice = total + markupValue

            // Set total price of individual line item + mark up in data object
            this.quotes.quote[locationIndex].trades[tradeIndex].components[
                itemIndex
            ].lineItems[lineItemIndex].total = totalPrice

            return Math.round(totalPrice, 2)
        },
        /* Calculate total price of all line items */
        calComponentLineItemsTotal(component) {
            let i
            let totalsArray = []

            for (i = 0; i < component.lineItems.length; i++) {
                totalsArray.push(component.lineItems[i].total)
            }

            const reducedTotalPrice = totalsArray.reduce((a, b) => a + b, 0)

            return reducedTotalPrice
        },
        /* Calculate component qty * component price + mark ups */
        calComponentPrice(
            componentQty,
            componentPrice,
            componentMarkUp,
            locationIndex,
            tradeIndex,
            itemIndex
        ) {
            const componentTotal = componentQty * componentPrice
            const markupValue = componentTotal * componentMarkUp * 0.01

            if (
                locationIndex != null &&
                tradeIndex != null &&
                itemIndex != null
            ) {
                this.quotes.quote[locationIndex].trades[tradeIndex].components[
                    itemIndex
                ].componentPrice = componentTotal + markupValue
            }

            return componentTotal + markupValue
        },
        /* Calculate grand total of entire component including line items */
        calComponentGrandTotal(component) {
            // Users component total price to compute component total
            const componentPrice = component.componentPrice

            // Uses line item total function to compute line item totals
            const lineItemsTotal = this.calComponentLineItemsTotal(component)

            const grandTotal = lineItemsTotal + componentPrice
            return grandTotal
        },
        /* Functions to calculate costs*/
        /* Calculate total cost of all line items */
        calLineItemTotalCost(
            qty,
            unitCost,
            locationIndex,
            tradeIndex,
            itemIndex,
            lineItemIndex
        ) {
            const totalCost = qty * unitCost

            // Set total price of individual line item + mark up in data object
            this.quotes.quote[locationIndex].trades[tradeIndex].components[
                itemIndex
            ].lineItems[lineItemIndex].totalCost = totalCost

            return totalCost
        },
        calComponentLineItemsCost(component) {
            let i
            let totalsArray = []
            for (i = 0; i < component.lineItems.length; i++) {
                totalsArray.push(component.lineItems[i].totalCost)
            }
            return totalsArray.reduce((a, b) => a + b, 0)
        },
        // Calculate grand total of entire component
        calComponentGrandTotalCost(component) {
            const componentQty = component.componentQty
            const componentUnitCost = component.componentUnitCost
            const componentTotalCost = componentQty * componentUnitCost

            // uses line item total cost function to compute line item total cost
            const lineItemsTotalCost = this.calComponentLineItemsCost(component)

            const grandTotalCost = componentTotalCost + lineItemsTotalCost
            return grandTotalCost
        },
        /* Functions to push data when add location/trade/component/lineItem is selected */
        // Add a new location
        addNewLocation() {
            this.quotes.quote.push({
                location: "",
                id: uuid(),
                trades: []
            })
        },
        // Add a new trade
        addNewTrade(idx) {
            this.quotes.quote[idx].trades.push({
                name: "New Trade",
                components: [
                    {
                        name: "",
                        id: uuid(),
                        componentPrice: 0,
                        componentQty: 0,
                        componentUnit: 0,
                        componentUnitPrice: 0,
                        componentUnitCost: 200,
                        componentMarkUp: 0,
                        componentTotalPrice: 0,
                        lineItemTotalPrice: 0,
                        lineItemTotalCost: 0,
                        lineItems: [
                            {
                                id: uuid(),
                                description: "",
                                unit: "ft",
                                unitPrice: 0,
                                qty: 0,
                                total: 0,
                                markup: 0,
                                unitCost: 20,
                                totalCost: 0
                            }
                        ]
                    }
                ]
            })
            this.expandedPanel = [idx]
        },
        // Add a new component
        addNewComponent(idx, tradeIdx) {
            this.quotes.quote[idx].trades[tradeIdx].components.push({
                name: "",
                id: uuid(),
                componentPrice: 0,
                componentQty: 0,
                componentUnit: 0,
                componentUnitPrice: 0,
                componentUnitCost: 200,
                componentMarkUp: 0,
                componentTotalPrice: 0,
                lineItemTotalPrice: 0,
                lineItemTotalCost: 0,
                lineItems: [
                    {
                        id: uuid(),
                        description: "",
                        unit: "ft",
                        unitPrice: 0,
                        qty: 0,
                        total: 0,
                        markup: 0,
                        unitCost: 20,
                        totalCost: 0
                    }
                ]
            })
        },
        // Add a new line item
        addNewLineItem(locationIdx, tradeIdx, itemIdx) {
            this.quotes.quote[locationIdx].trades[tradeIdx].components[
                itemIdx
            ].lineItems.push({
                id: uuid(),
                description: "",
                unit: "ft",
                unitPrice: 0,
                qty: 0,
                total: 0,
                markup: 0,
                unitCost: 20,
                totalCost: 0
            })
        }
    }
}
</script>
