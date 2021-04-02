<template>
    <v-container>
        <v-container>
            <div>
                <p style="display:inline">
                    <a @click="goToQuoteOverview">
                        Overview /
                    </a>
                </p>
            </div>
        </v-container>
        <v-data-table
            :headers="headers"
            :items="quotesCollection.quotesCollection"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:[`item.actions`]="{ item }">
                <v-btn
                    class="ma-1"
                    color="primary"
                    @click="openQuoteDetails(item)"
                >
                    View
                </v-btn>
                <v-btn
                    class="ma-1"
                    color="primary"
                    @click="openQuoteEditor(item.uid)"
                >
                    Edit
                </v-btn>
            </template>
        </v-data-table>
        <v-container>
            <v-btn class="ma-4" fab dark small color="primary darken-1">
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
            <span>Create New Quote</span>
        </v-container>
        <router-view :key="$route.path" />
    </v-container>
</template>

<script>
import { mapState } from "vuex"

export default {
    data() {
        return {
            headers: [
                {
                    text: "Project",
                    align: "start",
                    sortable: false,
                    value: "projectName"
                },
                { text: "Client", value: "clientName" },
                { text: "Total Value ($)", value: "totalProjectPrice" },
                { text: "Total Cost ($)", value: "totalProjectCost" },
                { text: "Total Profit ($)", value: "totalProjectProfit" },
                { text: "Total Margins (%)", value: "totalProjectMargins" },
                { text: "Actions", value: "actions", sortable: false }
            ],
            links: [
                {
                    text: "Overview",
                    disabled: false,
                    href: "/quotes/list"
                }
            ]
        }
    },
    computed: {
        ...mapState(["quotesCollection"])
    },
    methods: {
        openQuoteDetails(quote) {
            this.$router.push({
                name: "QuoteDetails",
                params: { id: quote.uid }
            })
        },
        openQuoteEditor(id) {
            this.$router.push({
                name: "QuoteEditor",
                params: { id: id }
            })
            this.$store.dispatch("setCurrentEditQuote", this.quote)
            console.log("Current Quote State Set")
        }
    }
}
</script>
