<template>
    <v-app>
        <v-toolbar color="#fcb69f" light flat>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>Your Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
                <v-tabs v-model="tab" align-with-title fixed-tabs>
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tab @click="toggleDashboard">
                        dashboard
                    </v-tab>
                    <v-tab @click="toggleProjects">
                        projects
                    </v-tab>
                    <v-tab @click="toggleQuotes">
                        quotes
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
        <v-main class="grey lighten-3">
            <v-container>
                <v-sheet min-height="95vh">
                    <router-view />
                </v-sheet>
            </v-container>
        </v-main>
        <v-container>
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { title: "Home", icon: "mdi-view-dashboard" },
                { title: "About", icon: "mdi-forum" }
            ],
            tab: null
        }
    },
    methods: {
        toggleDashboard() {
            this.$router.push({
                name: "Dashboard"
            })
        },
        toggleProjects() {
            this.$router.push({
                name: "Projects"
            })
        },
        toggleQuotes() {
            this.$router.push({
                name: "QuotesTable"
            })
        }
    }
}
</script>
