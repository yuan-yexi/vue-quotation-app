<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="1600"
        persistent
        v-model="dialogProjectDetails"
    >
        <v-card class="mx-auto" max-width="1600">
            <v-card-title>
                <h2 class="title primary--text">
                    {{ project.name }}
                </h2>
            </v-card-title>
            <v-card-text>
                <p>
                    {{ project.address }}
                </p>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange lighten-2" @click="closeProjectDetails">
                    Edit
                </v-btn>
                <v-btn color="orange lighten-2" @click="closeProjectDetails">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    data() {
        return {
            dialogProjectDetails: true
        }
    },
    computed: {
        ...mapState(["quotesCollection"]),
        ...mapGetters(["getProject"]),
        project() {
            return this.getProject(this.$route.params.id)
        }
    },
    methods: {
        closeProjectDetails() {
            this.$router.back()
        }
    }
}
</script>
