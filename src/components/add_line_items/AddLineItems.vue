<template>
    <div class="mx-2">
        <v-row>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="3">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="light-blue"
                            @click="addLineItemDialog = true"
                        >
                            <v-icon dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                        <span>Add Line Items</span>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-btn
                            class="mx-2"
                            fab
                            dark
                            small
                            color="light-blue"
                            @click="editCurrentLineItems"
                        >
                            <v-icon dark>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                        <span>Edit Current Line Items</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-dialog
                v-model="addLineItemDialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
            >
                <v-card tile>
                    <v-toolbar flat dark color="primary">
                        <v-btn icon dark @click="closeWarning">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>
                            Add new line item
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items></v-toolbar-items>
                    </v-toolbar>
                    <v-card-actions>
                        <v-btn color="primary" @click="saveAndClose">
                            Add and Save
                        </v-btn>
                        <v-btn color="primary" @click="closeWarning">
                            Cancel
                        </v-btn>
                        <v-btn color="primary" @click="editCurrentLineItems">
                            Edit Existing Line Items
                        </v-btn>
                    </v-card-actions>
                    <v-card-text>
                        <v-list>
                            <ToBeAddedLineItemsTable
                                :headers="headers"
                                :localToBeAdded="localToBeAdded"
                            />
                            <CostBookLineItemsTable
                                :headers="headers"
                                :localToBeAdded="localToBeAdded"
                                :costCollection="costCollection"
                            />
                        </v-list>
                    </v-card-text>
                    <div style="flex: 1 1 auto;"></div>
                </v-card>
            </v-dialog>
            <v-dialog v-model="currentLineItemsTable" max-width="1200">
                <v-card>
                    <v-card-title>
                        Edit Current Line Items
                    </v-card-title>
                    <v-card-text>
                        <ExistingLineItemsTable
                            :headers="headers"
                            :existingLineItems="existingLineItems"
                        />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" text @click="closeAndClear">
                            Save
                        </v-btn>
                        <v-btn color="primary" text @click="closeAndClear">
                            Continue Without Saving
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="closeAlert" max-width="500px">
                <v-card>
                    <v-card-title>
                        Close without saving?
                    </v-card-title>
                    <v-card-text>
                        All data will be lost if you close this tab without
                        saving
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" text @click="saveAndClose">
                            Save
                        </v-btn>
                        <v-btn color="primary" text @click="closeAndClear">
                            Continue Without Saving
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import { mapState } from "vuex"
import ExistingLineItemsTable from "@/components/add_line_items/ExistingLineItem.vue"
import ToBeAddedLineItemsTable from "@/components/add_line_items/ToBeAddedLineItem.vue"
import CostBookLineItemsTable from "@/components/add_line_items/CostBookLineItem.vue"

export default {
    data() {
        return {
            addLineItemDialog: false,
            closeAlert: false,
            currentLineItemsTable: false,
            localToBeAdded: []
        }
    },
    components: {
        ExistingLineItemsTable,
        ToBeAddedLineItemsTable,
        CostBookLineItemsTable
    },
    props: ["quoteId", "costGroupId", "lineItemId", "existingLineItems"],
    computed: {
        ...mapState(["costCollection"]),
        headers() {
            return [
                {
                    text: "Line item name",
                    align: "start",
                    sortable: false,
                    value: "lineItemName"
                },
                { text: "Unit", value: "unit" },
                {
                    text: "SuggestedPrice",
                    value: "price",
                    filter: value => {
                        if (!this.price) return true

                        return value < parseInt(this.price)
                    }
                },
                { text: "Cost ($)", value: "cost" },
                { text: "Actions", value: "actions", sortable: false }
            ]
        }
    },
    methods: {
        closeAndClear() {
            this.localToBeAdded = []
            this.addLineItemDialog = false
            this.closeAlert = false
        },
        closeWarning() {
            this.closeAlert = true
        },
        saveAndClose() {
            for (const newItem in this.localToBeAdded) {
                this.existingLineItems.push(this.localToBeAdded[newItem])
            }
            this.localToBeAdded = []
            this.addLineItemDialog = false
            this.closeAlert = false
        },
        editCurrentLineItems() {
            this.currentLineItemsTable = !this.currentLineItemsTable
        }
    }
}
</script>
