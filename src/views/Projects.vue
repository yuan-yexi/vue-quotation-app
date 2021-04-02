<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" sm="2">
                <v-card
                    outlined
                    style="height: 800px"
                    class="rounded-lg"
                    color="deep-orange lighten-5"
                >
                    <v-card-title>
                        Total Pipeline Value<br />
                        ${{ dashboardTotalValue | formatPrice }}
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col
                v-for="(column, $columnIndex) in board.columns"
                cols="12"
                sm="2"
                :key="$columnIndex"
                @drop="moveProject($event, column.projects)"
                @dragover.prevent
                @dragenter.prevent
            >
                <v-card
                    outlined
                    class="mb-2 rounded-lg"
                    style="height: 800px"
                    color="deep-orange lighten-4"
                >
                    <v-card-title>
                        {{ column.name }}
                        <br />
                        ${{ columnTotalValue[$columnIndex] | formatPrice }}
                    </v-card-title>
                    <v-divider dark></v-divider>
                    <v-card-text>
                        <v-card
                            v-for="(project, $projectIndex) in column.projects"
                            :key="$projectIndex"
                            class="mx-auto mb-2 rounded-lg"
                            max-width="400"
                            tile
                            @click="openProjectDetails(project)"
                            draggable
                            @dragstart="
                                pickupProject(
                                    $event,
                                    $projectIndex,
                                    $columnIndex
                                )
                            "
                        >
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ project.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        ${{ project.value | formatPrice }}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        {{ project.address }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-chip class="ma-2" color="primary">
                                Primary
                            </v-chip>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="isProjectOpen">
            <router-view />
        </div>
    </v-container>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(["board"]),
        columnTotalValue() {
            let columnValueArray = []
            let totalValueArray = []
            for (let i = 0; i < this.board.columns.length; i++) {
                for (
                    let j = 0;
                    j < this.board.columns[i].projects.length;
                    j++
                ) {
                    columnValueArray.push(
                        this.board.columns[i].projects[j].value
                    )
                }
                totalValueArray.push(
                    columnValueArray.reduce((a, b) => a + b, 0)
                )
                columnValueArray = []
            }
            return totalValueArray
        },
        dashboardTotalValue() {
            return this.columnTotalValue.reduce((a, b) => a + b, 0)
        },
        isProjectOpen() {
            return this.$route.name === "Project" //show only if route name is project detail
        }
    },
    methods: {
        openProjectDetails(project) {
            this.$router.push({ name: "Project", params: { id: project.id } }) // push to child view of project detail and pass id to use as identifier as getter
        },
        pickupProject(e, projectIndex, fromColumnIndex) {
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.dropEffect = "move"

            e.dataTransfer.setData("project-index", projectIndex)
            e.dataTransfer.setData("from-column-index", fromColumnIndex)
        },
        moveProject(e, toProjects) {
            const fromColumnIndex = e.dataTransfer.getData("from-column-index")
            const fromProjects = this.board.columns[fromColumnIndex].projects
            const projectIndex = e.dataTransfer.getData("project-index")

            this.$store.commit("MOVE_PROJECT", {
                fromProjects,
                toProjects,
                projectIndex
            })
        }
    },
    filters: {
        formatPrice(val) {
            if (!val) return 0
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>
