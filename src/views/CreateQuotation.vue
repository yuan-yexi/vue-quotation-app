<template>
    <v-container>
        <v-expansion-panels
            multiple
            v-for="(section, $sectionIndex) in quote"
            :key="$sectionIndex"
            style="margin-bottom: 1rem;"
        >
            <v-expansion-panel>
                <v-expansion-panel-header style="background-color: #efefef">
                    <h1>{{ section.name }}</h1>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-expansion-panel
                        v-for="(type, $typeIndex) in section.type"
                        :key="$typeIndex"
                    >
                        <v-expansion-panel-header>
                            <h2>{{ type.name }}</h2>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content
                            v-for="(item, $itemIndex) in type.items"
                            :key="$itemIndex"
                        >
                            <v-card outlined style="padding:1rem;">
                                <v-simple-table>
                                    <thead>
                                        <tr>
                                            <th width="50%">
                                                <h2>{{ item.item }}</h2>
                                            </th>
                                            <th>
                                                <v-chip label color="red">
                                                    Dimension
                                                </v-chip>
                                            </th>
                                            <th>
                                                <v-chip label color="yellow">
                                                    Unit Rate
                                                </v-chip>
                                            </th>
                                            <th>
                                                <v-chip label color="blue">
                                                    Price
                                                </v-chip>
                                            </th>
                                            <th>
                                                <v-chip label color="primary">
                                                    Cost and Profit
                                                </v-chip>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Price
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    dense
                                                    flat
                                                    hide-details
                                                    rounded
                                                    solo-inverted
                                                ></v-text-field>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-card>
                            <v-card outlined>
                                <v-simple-table>
                                    <thead>
                                        <tr>
                                            <th width="50%">Line Items</th>
                                            <th width="14%">Quantity</th>
                                            <th width="12%">Unit</th>
                                            <th>Unit Cost</th>
                                            <th>Total Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        v-for="(lineItem,
                                        $lineItemIndex) in item.lineItems"
                                        :key="$lineItemIndex"
                                    >
                                        <tr>
                                            <td>{{ lineItem.description }}</td>
                                            <td>{{ lineItem.qty }}</td>
                                            <td>{{ lineItem.unit }}</td>
                                            <td>{{ lineItem.unitPrice }}</td>
                                            <td>
                                                {{
                                                    lineItem.qty *
                                                        lineItem.unitPrice
                                                }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            quote: [
                {
                    name: "Kitchen",
                    type: [
                        {
                            name: "Masonry Works",
                            items: [
                                {
                                    item: "Floor tiling",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        },
                                        {
                                            id: "2",
                                            description:
                                                "Supply labour and materials to install concealed floor traps",
                                            unit: "ft",
                                            unitPrice: 5,
                                            qty: 100
                                        }
                                    ]
                                },
                                {
                                    item: "Dresser",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        },
                                        {
                                            id: "2",
                                            description:
                                                "Supply labour and materials to install concealed floor traps",
                                            unit: "ft",
                                            unitPrice: 5,
                                            qty: 100
                                        }
                                    ]
                                },
                                {
                                    item: "Basin",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        },
                                        {
                                            id: "2",
                                            description:
                                                "Supply labour and materials to install concealed floor traps",
                                            unit: "ft",
                                            unitPrice: 5,
                                            qty: 100
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Kitchen",
                    type: [
                        {
                            name: "Masonry Works",
                            items: [
                                {
                                    item: "Floor tiling",
                                    name: "Component Name",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        },
                                        {
                                            id: "2",
                                            description:
                                                "Supply labour and materials to install concealed floor traps",
                                            unit: "ft",
                                            unitPrice: 5,
                                            qty: 100
                                        }
                                    ]
                                },
                                {
                                    item: "Dresser",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        },
                                        {
                                            id: "2",
                                            description:
                                                "Supply labour and materials to install concealed floor traps",
                                            unit: "ft",
                                            unitPrice: 5,
                                            qty: 100
                                        }
                                    ]
                                },
                                {
                                    item: "Basin",
                                    id: 123,
                                    lineItems: [
                                        {
                                            id: "1",
                                            description:
                                                "Supply labour and materials to install screed levelling and waterproofing",
                                            unit: "ft",
                                            unitPrice: 8,
                                            qty: 120
                                        },
                                        {
                                            id: "2",
                                            description:
                                                "Supply labour and materials to install concealed floor traps",
                                            unit: "ft",
                                            unitPrice: 5,
                                            qty: 100
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>
