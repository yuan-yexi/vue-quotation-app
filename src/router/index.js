import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue")
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("../views/Projects.vue"),
        children: [
            {
                path: "project/:id",
                name: "Project",
                component: () =>
                    import("../components/projects/ProjectDetails.vue")
            }
        ]
    },
    {
        path: "/quotes",
        name: "Quotes",
        component: () => import("../views/Quotes.vue"),
        children: [
            {
                path: "list",
                name: "QuotesTable",
                props: true,
                component: () => import("../components/quotes/QuotesTable.vue"),
                children: [
                    {
                        path: ":id",
                        name: "QuoteDetails",
                        props: true,
                        component: () =>
                            import("../components/quotes/QuoteDetails.vue")
                    }
                ]
            },
            {
                path: "edit/:id",
                name: "QuoteEditor",
                props: true,
                component: () => import("../components/quotes/QuoteEditor.vue")
            }
        ]
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
