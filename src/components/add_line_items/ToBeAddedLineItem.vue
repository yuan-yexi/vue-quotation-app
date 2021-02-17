<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>
                <h3>Line Items To Be Added</h3>
            </v-list-item-title>
            <v-divider></v-divider>
            <v-list-item-subtitle>
                <v-data-table
                    v-model="checkedToRemove"
                    :headers="headers"
                    :items="localToBeAdded"
                    item-key="uid"
                    show-select
                    class="elevation-2"
                    :search="searchAdded"
                >
                    <template v-slot:top>
                        <tr>
                            <td>
                                <v-btn
                                    small
                                    color="red"
                                    dark
                                    @click="removeMultiple"
                                >
                                    Remove Selected
                                </v-btn>
                            </td>
                            <td>
                                <v-text-field
                                    v-model="searchAdded"
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
                            color="red"
                            @click="removeRow(item)"
                        >
                            <v-icon normal>
                                mdi-minus
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
            searchAdded: [],
            checkedToRemove: []
        }
    },
    props: ["localToBeAdded", "headers"],
    methods: {
        removeRow(item) {
            this.existingLineItems.pop(item)
        },
        removeMultiple() {
            for (const checked in this.checkedToRemove) {
                this.localToBeAdded.pop(this.checkedToRemove[checked])
            }
        }
    }
}
</script>
