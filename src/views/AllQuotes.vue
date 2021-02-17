<template>
    <div>
        <QuoteCard :quotes="quotesCollection.quotesCollection" />
        <div>
            <router-view :key="$route.path" />
        </div>
    </div>
</template>

<script>
//import { uuid } from "../utils"
import QuoteCard from "../components/QuoteCard.vue"
import { mapState } from "vuex"

export default {
    data() {
        return {
            name: ""
        }
    },
    components: {
        QuoteCard
    },
    computed: {
        ...mapState(["quotesCollection"])
    }
}
</script>
