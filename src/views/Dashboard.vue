<template>
    <v-container>
        <v-row>
            <v-col
                v-for="(column, $columnIndex) in board.columns"
                :key="$columnIndex"
                @drop="moveProject($event, column.projects)"
                @dragover.prevent
                @dragenter.prevent
            >
                <v-card outlined style="margin-bottom: 1rem;">
                    <v-card-title>
                        {{ $columnIndex }} {{ column.name }}
                        <br />
                        ${{ columnTotalValue[$columnIndex] }} |
                        {{ column.projects.length }}
                    </v-card-title>
                </v-card>
                <v-card
                    v-for="(project, $projectIndex) in column.projects"
                    :key="$projectIndex"
                    class="mx-auto"
                    max-width="400"
                    outlined
                    tile
                    style="margin-bottom: 1rem;"
                    @click="openProjectDetails(project)"
                    draggable
                    @dragstart="
                        pickupProject($event, $projectIndex, $columnIndex)
                    "
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ $projectIndex }} {{ project.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                ${{ project.value }}
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
    }
}
</script>
