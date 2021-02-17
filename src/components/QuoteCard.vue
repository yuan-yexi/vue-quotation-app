<template>
    <v-container>
        <v-row>
            <v-col v-for="(quote, $index) in quotes" :key="$index" cols="3">
                <v-card @click="openQuoteDetails(quote)">
                    <v-card-title>{{ quote.projectName }}</v-card-title>
                    <v-card-text></v-card-text>
                    <v-card-actions></v-card-actions>
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
        }
    }
}
</script>
