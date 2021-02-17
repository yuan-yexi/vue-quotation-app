<template>
    <v-overlay light>
        <v-container>
            <v-card color="white" class="mx-auto my-12" light>
                <v-card-title>Quote Details {{ id }}</v-card-title>
                <v-card-subtitle>{{ quote.projectName }}</v-card-subtitle>
                <v-card-text>
                    {{ quote.totalProjectPrice }}
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        elevation="2"
                        color="primary"
                        @click="openQuoteEditor(id)"
                    >
                        Go to Quote: {{ id }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-overlay>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            name: "QuoteDetails"
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
        }
    }
}
</script>
