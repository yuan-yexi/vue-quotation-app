<template>
    <v-container>
        <v-container>
            <div>
                <p style="display:inline">
                    <a @click="goToQuoteOverview">
                        Overview
                    </a>
                </p>
                <p style="display:inline">
                    / Editor
                </p>
            </div>
        </v-container>
        <v-toolbar color="blue-grey" dark flat>
            <v-toolbar-title>
                <h3>{{ quote.projectName }}</h3>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
        <v-container>
            <div>
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
                        <QuoteDistinctGroup
                            :distinctGroupings="distinctLocations"
                            :costGroups="quote.costGroups"
                            :quoteId="id"
                            groupType="Location"
                        />
                    </v-tab-item>
                    <v-tab-item>
                        <QuoteDistinctGroup
                            :distinctGroupings="distinctTrades"
                            :costGroups="quote.costGroups"
                            :quoteId="id"
                            groupType="Trade"
                        />
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </v-container>
    </v-container>
</template>

<script>
import QuoteDistinctGroup from "@/components/quotes/QuoteDistinctGroup.vue"
import { mapState, mapGetters } from "vuex"

export default {
    data() {
        return {
            name: "QuoteEditor",
            tab: null,
            editDialog: true
        }
    },
    components: {
        QuoteDistinctGroup
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
    },
    methods: {
        goToQuoteOverview() {
            this.$router.push({
                name: "QuotesTable"
            })
        }
    }
}
</script>
