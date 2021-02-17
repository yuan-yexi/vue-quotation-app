<template>
    <v-overlay opacity="0.1" @click="closeProjectDetails">
        <v-card class="mx-auto" max-width="600">
            <v-img
                src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
            ></v-img>

            <v-card-text>
                <h2 class="title primary--text">
                    {{ project.name }}
                </h2>
                <p>
                    {{ project.address }}
                </p>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange lighten-2" @click="closeProjectDetails">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-overlay>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    computed: {
        ...mapState(["quotesCollection"]),
        ...mapGetters(["getProject"]),
        project() {
            return this.getProject(this.$route.params.id)
        }
    },
    methods: {
        closeProjectDetails() {
            this.$router.push({ name: "Dashboard" })
        }
    }
}
</script>
