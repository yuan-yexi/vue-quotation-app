<template>
    <v-container>
        <v-row>
            <v-col v-for="(quote, $index) in quotes" :key="$index" cols="12">
                <v-card class="ma-2">
                    <v-row>
                        <v-col cols="12" sm="4" class="d-flex">
                            <v-container>
                                <v-card-title>
                                    {{ quote.projectName }}
                                </v-card-title>
                                <v-chip class="ml-4">tag</v-chip>
                            </v-container>
                        </v-col>
                        <v-col cols="12" sm="2" class="d-flex">
                            <v-container>
                                <v-card-title>
                                    {{ quote.clientName }}
                                </v-card-title>
                            </v-container>
                        </v-col>
                        <v-col cols="12" sm="2" class="d-flex justify-start">
                            <v-container>
                                <v-card-title>
                                    Total Value: {{ quote.totalProjectPrice }}
                                </v-card-title>
                            </v-container>
                        </v-col>
                        <v-col cols="12" sm="2" class="d-flex justify-start">
                            <v-container>
                                <v-card-title>
                                    Total Profits:
                                    {{ quote.totalProjectProfit }}
                                </v-card-title>
                            </v-container>
                        </v-col>
                        <v-col cols="12" sm="2" class="d-flex justify-start">
                            <v-container>
                                <v-card-actions class="mr-5">
                                    <v-btn
                                        color="primary"
                                        @click="openQuoteDetails(quote)"
                                    >
                                        View
                                    </v-btn>
                                    <v-btn
                                        color="primary"
                                        @click="openQuoteEditor(quote.uid)"
                                    >
                                        Edit
                                    </v-btn>
                                </v-card-actions>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: "QuoteCard"
        }
    },
    props: ["quotes"],
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
