<template>
    <div class="mt-2">
        <AddNewGroup :quoteId="quoteId" :groupType="groupType" />
        <div
            v-for="(distinctGrouping,
            $distinctGroupingIndex) in distinctGroupings"
            :key="$distinctGroupingIndex"
        >
            <v-container class="mx-2">
                <h1>{{ distinctGrouping }}</h1>
            </v-container>
            <v-divider></v-divider>
            <AddCostGroups
                :distinctGrouping="distinctGrouping"
                :distinctGroupings="distinctGroupings"
            />
            <div
                v-for="(costGroup, $costGroupIndex) in costGroups"
                :key="$costGroupIndex"
            >
                <v-expansion-panels
                    v-if="
                        costGroup.location === distinctGrouping ||
                            costGroup.trade === distinctGrouping
                    "
                    popout
                    class="mb-2"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header color="primary">
                            <h2 style="color: white;">
                                {{ costGroup.costGroupName }}
                            </h2>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-container
                                v-for="(lineItem,
                                $lineItemIndex) in costGroup.lineItems"
                                :key="$lineItemIndex"
                                class="mt-2"
                            >
                                {{
                                    setTotalLineItemPrice(
                                        quoteId,
                                        costGroup.uid,
                                        lineItem.uid,
                                        lineItem.price,
                                        lineItem.quantity,
                                        lineItem.cost,
                                        lineItem.margins
                                    )
                                }}
                                <v-row no-gutters>
                                    <v-col cols="12" lg="5" class="mr-2">
                                        <v-textarea
                                            outlined
                                            v-model="lineItem.lineItemName"
                                            label="Line item name"
                                            rows="2"
                                            auto-grow
                                            readonly
                                        ></v-textarea>
                                    </v-col>
                                    <v-col cols="12" lg="1" class="mr-2">
                                        <v-text-field
                                            filled
                                            dense
                                            v-model="lineItem.quantity"
                                            label="Qty"
                                            :suffix="lineItem.unit"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="1" class="mr-2">
                                        <v-text-field
                                            filled
                                            dense
                                            v-model="lineItem.price"
                                            prefix="$"
                                            type="number"
                                            label="UnitPrice"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="1" class="mr-2">
                                        <v-text-field
                                            filled
                                            dense
                                            v-model="lineItem.margins"
                                            label="Mark Up"
                                            suffix="%"
                                            type="number"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="1" class="mr-2">
                                        <v-chip
                                            color="primary darken-1"
                                            label
                                            dark
                                            class="mr-2 mb-2 pt-3"
                                            style="width: 100%; height:55px;"
                                        >
                                            <p>
                                                Total Price <br />$
                                                {{ lineItem.total }}
                                            </p>
                                        </v-chip>
                                    </v-col>
                                    <v-col cols="12" lg="1" class="mr-2">
                                        <v-chip
                                            color="red darken-1"
                                            label
                                            dark
                                            class="mr-2 mb-2 pt-3"
                                            style="width: 100%; height:55px;"
                                        >
                                            <p>
                                                Total Cost <br />$
                                                {{ lineItem.totalCost }}
                                            </p>
                                        </v-chip>
                                    </v-col>
                                    <v-col cols="12" lg="1" class="mr-2">
                                        <v-chip
                                            color="green darken-1"
                                            label
                                            dark
                                            class="mr-2 mb-2 pt-3"
                                            style="width: 100%; height:55px;"
                                        >
                                            <p>
                                                Total Profits <br />$
                                                {{ lineItem.profit }}
                                            </p>
                                        </v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <AddLineItems
                                :quoteId="quoteId"
                                :costGroupId="costGroup.uid"
                                :existingLineItems="costGroup.lineItems"
                            />
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
import AddLineItems from "@/components/add_line_items/AddLineItems.vue"
import AddCostGroups from "@/components/add_cost_groups/AddCostGroups.vue"
import AddNewGroup from "@/components/add_groups/AddNewGroup.vue"

export default {
    components: {
        AddLineItems,
        AddCostGroups,
        AddNewGroup
    },
    props: ["distinctGroupings", "costGroups", "quoteId", "groupType"],
    methods: {
        /* Dispatch action to Vuex Store */
        setTotalLineItemPrice(
            quoteId,
            costGroupId,
            lineItemId,
            lineItemPrice,
            lineItemQuantity,
            lineItemCost,
            lineItemMargin
        ) {
            let totalLineItemPrice = lineItemPrice * lineItemQuantity
            let totalLineItemCost = lineItemCost * lineItemQuantity
            let markupValue = totalLineItemPrice * lineItemMargin * 0.01
            let totalPlusMarkUp = totalLineItemPrice + markupValue
            let totalProfits = totalPlusMarkUp - totalLineItemCost

            totalLineItemPrice = this.formatCurrency(totalLineItemPrice)
            totalLineItemCost = this.formatCurrency(totalLineItemCost)
            markupValue = this.formatCurrency(markupValue)
            totalPlusMarkUp = this.formatCurrency(totalPlusMarkUp)
            totalProfits = this.formatCurrency(totalProfits)

            if (costGroupId != null && lineItemId != null) {
                this.$store.dispatch("setTotalLineItemStates", {
                    quoteId: quoteId,
                    costGroupId: costGroupId,
                    lineItemId: lineItemId,
                    lineItemPrice: lineItemPrice,
                    lineItemQuantity: lineItemQuantity,
                    totalLineItemPrice: totalPlusMarkUp,
                    totalLineItemCost: totalLineItemCost,
                    totalProfits: totalProfits
                })
            }
        },
        formatCurrency(val) {
            if (!val) return 0
            return val
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>
