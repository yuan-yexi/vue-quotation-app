<template>
    <v-container>
        <div>
            <h1>Project: {{ quote.projectName }}</h1>
            <p>Client: {{ quote.clientName }}</p>
        </div>
        <v-divider></v-divider>
        <v-tabs v-model="tab">
            <v-tab>
                By Location
            </v-tab>
            <v-tab>
                By Trade
            </v-tab>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <LocationGroup
                        v-bind:distinctLocations="distinctLocations"
                        v-bind:costGroups="quote.costGroups"
                        v-bind:quoteId="id"
                    />
                </v-tab-item>
                <v-tab-item>
                    <div
                        v-for="(distinctTrade,
                        $distinctTradeIndex) in distinctTrades"
                        :key="$distinctTradeIndex"
                    >
                        <h1>{{ distinctTrade }}</h1>
                        <div
                            v-for="(costGroup,
                            $costGroupIndex) in quote.costGroups"
                            :key="$costGroupIndex"
                        >
                            <v-expansion-panels
                                v-if="costGroup.trade === distinctTrade"
                                class="mb-2"
                            >
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <h2>{{ costGroup.costGroupName }}</h2>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content
                                        v-for="(lineItem,
                                        $lineItemIndex) in costGroup.lineItems"
                                        :key="$lineItemIndex"
                                    >
                                        {{ lineItem }}
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
    </v-container>
</template>

<script>
import LocationGroup from "@/components/LocationGroup.vue"
import { mapState, mapGetters } from "vuex"

export default {
    data() {
        return {
            name: "QuoteEditor",
            tab: null
        }
    },
    components: {
        LocationGroup
    },
    props: ["id"],
    computed: {
        ...mapState(["quotesCollection"]),
        ...mapGetters(["getQuote"]),
        quote() {
            console.log("Getter data is fetched")
            return this.getQuote(this.id)
        },
        distinctLocations() {
            let costGroupLocations = []
            for (const costGroup in this.quote.costGroups) {
                costGroupLocations.push(
                    this.quote.costGroups[costGroup].location
                )
            }
            const distinctLocations = [...new Set(costGroupLocations)]
            return distinctLocations
        },
        distinctTrades() {
            let costGroupTrades = []
            for (const costGroup in this.quote.costGroups) {
                costGroupTrades.push(this.quote.costGroups[costGroup].trade)
            }
            const distinctTrades = [...new Set(costGroupTrades)]
            return distinctTrades
        }
    }
}
</script>
