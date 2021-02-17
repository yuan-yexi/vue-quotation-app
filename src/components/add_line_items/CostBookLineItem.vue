<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>
                <h3>Cost Book Line items</h3>
            </v-list-item-title>
            <v-divider></v-divider>
            <v-list-item-subtitle>
                <v-data-table
                    :headers="headers"
                    :items="costCollection.lineItemCosts"
                    class="elevation-2"
                    :search="search"
                    item-key="uid"
                    show-select
                    v-model="checkedToAdd"
                >
                    <template v-slot:top>
                        <tr>
                            <td>
                                <v-btn
                                    small
                                    color="success"
                                    dark
                                    @click="addMultiple"
                                >
                                    Add Selected
                                </v-btn>
                            </td>
                            <td>
                                <v-text-field
                                    v-model="searchCostBook"
                                    label="Search"
                                    class="mx-4"
                                    append-icon="mdi-magnify"
                                ></v-text-field>
                            </td>
                        </tr>
                    </template>
                    <template
                        v-slot:[`item.actions`]="{
                            item
                        }"
                    >
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="success"
                            @click="addRow(item)"
                        >
                            <v-icon normal>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    data() {
        return {
            searchCostBook: [],
            checkedToAdd: []
        }
    },
    props: ["localToBeAdded", "headers", "costCollection"],
    methods: {
        addRow(item) {
            this.localToBeAdded.push(item)
        },
        addMultiple() {
            for (const checked in this.checkedToAdd) {
                this.localToBeAdded.push(this.checkedToAdd[checked])
            }
        }
    }
}
</script>
