<template>
    <v-container>
        <router-view :key="$route.path" />
    </v-container>
</template>

<script>
//import { uuid } from "../utils"
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(["quotesCollection"])
    }
}
</script>
