<template>
    <v-dialog v-model="dialog" width="500" persistent>
        <v-card>
            <v-card-title>Quote Details {{ id }}</v-card-title>
            <v-card-subtitle>{{ quote.projectName }}</v-card-subtitle>
            <v-card-text>
                Project Value: {{ quote.totalProjectPrice }}
            </v-card-text>
            <v-card-actions>
                <v-btn
                    elevation="2"
                    color="primary"
                    @click="openQuoteEditor(id)"
                >
                    Edit Quote
                </v-btn>
                <v-btn
                    elevation="2"
                    color="red"
                    dark
                    @click="closeQuoteDetails"
                >
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            name: "QuoteDetails",
            dialog: true
        }
    },
    props: ["id"],
    computed: {
        ...mapGetters(["getQuote"]),
        quote() {
            return this.getQuote(this.$route.params.id)
        }
    },
    methods: {
        openQuoteEditor(id) {
            this.$router.push({
                name: "QuoteEditor",
                params: { id: id }
            })
            this.$store.dispatch("setCurrentEditQuote", this.quote)
            console.log("Current Quote State Set")
        },

        closeQuoteDetails() {
            this.$router.back()
        }
    }
}
</script>
