<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-container>
                <v-card>
                    <v-card-title>Projects</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Name
                                        </th>
                                        <th class="text-left">
                                            Calories
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in desserts"
                                        :key="item.name"
                                    >
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-col>
        <v-col cols="12" sm="6">
            <v-container>
                <v-card>
                    <v-card-title>Quotations</v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Name
                                        </th>
                                        <th class="text-left">
                                            Calories
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in desserts"
                                        :key="item.name"
                                    >
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237
                },
                {
                    name: "Eclair",
                    calories: 262
                },
                {
                    name: "Cupcake",
                    calories: 305
                },
                {
                    name: "Gingerbread",
                    calories: 356
                },
                {
                    name: "Jelly bean",
                    calories: 375
                },
                {
                    name: "Lollipop",
                    calories: 392
                },
                {
                    name: "Honeycomb",
                    calories: 408
                },
                {
                    name: "Donut",
                    calories: 452
                },
                {
                    name: "KitKat",
                    calories: 518
                }
            ]
        }
    }
}
</script>
