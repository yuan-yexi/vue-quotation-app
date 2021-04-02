<template>
    <div class="mx-2">
        <v-row>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="3">
                        <v-btn
                            class="ma-2"
                            fab
                            dark
                            small
                            color="primary darken-1"
                            @click="addCostGroupDialog = true"
                        >
                            <v-icon dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                        <span>Add New Cost Group</span>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-btn
                            class="ma-2"
                            fab
                            dark
                            small
                            color="primary darken-1"
                            @click="editCurrentLineItems"
                        >
                            <v-icon dark>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                        <span>Edit Current Cost Groups</span>
                    </v-col>
                </v-row>
            </v-container>
            <v-dialog
                v-model="addCostGroupDialog"
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
                            Add new cost group for {{ distinctLocation }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items></v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-container>
                                <h2>Add a new cost group</h2>
                            </v-container>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <v-select
                                            :items="distinctLocations"
                                            v-model="formInputs.location"
                                            label="Location"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="formInputs.trade"
                                            label="Cost Group Trade"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="formInputs.costGroupName"
                                            label="Cost Group Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            v-model="
                                                formInputs.costGroupDescription
                                            "
                                            label="Cost Group Description"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-select
                                            v-model="value"
                                            :items="tags"
                                            attach
                                            chips
                                            label="Tags"
                                            multiple
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                        <v-container>
                            <ExistingLineItemsTable
                                :localToBeAdded="localToBeAdded"
                            />
                        </v-container>
                    </v-card-text>
                    <v-container>
                        <v-card-actions>
                            <v-btn color="primary" @click="saveAndClose">
                                Add and Save
                            </v-btn>
                            <v-btn color="primary" @click="closeWarning">
                                Cancel
                            </v-btn>
                            <v-btn
                                color="primary"
                                @click="editCurrentLineItems"
                            >
                                Edit Existing Line Items
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                    <div style="flex: 1 1 auto;"></div>
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
import { uuid } from "@/utils"
import ExistingLineItemsTable from "@/components/add_line_items/ExistingLineItem.vue"

export default {
    data() {
        return {
            addCostGroupDialog: false,
            closeAlert: false,
            currentLineItemsTable: false,
            localToBeAdded: [],
            tags: ["kitchen", "masonry", "water-proofing"],
            formInputs: {
                costGroupName: "",
                costGroupDescription: "",
                uid: uuid(),
                location: this.distinctLocation,
                trade: "Masonry",
                totalPrice: 0,
                totalCost: 0,
                totalProfit: 0,
                totalMargins: 0,
                tags: [],
                lineItems: []
            }
        }
    },
    components: {
        ExistingLineItemsTable
    },
    props: [
        "quoteId",
        "costGroupId",
        "lineItemId",
        "distinctLocation",
        "distinctLocations"
    ],
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
            this.addCostGroupDialog = false
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
            this.addCostGroupDialog = false
            this.closeAlert = false
        },
        editCurrentLineItems() {
            this.currentLineItemsTable = !this.currentLineItemsTable
        }
    }
}
</script>
