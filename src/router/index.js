import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
        children: [
            {
                path: "project/:id",
                name: "Project",
                component: () => import("../components/ProjectDetails.vue")
            }
        ]
    },
    {
        path: "/allquotes",
        name: "AllQuotes",
        component: () => import("../views/AllQuotes.vue"),
        children: [
            {
                path: "quote/:id",
                name: "QuoteDetails",
                props: true,
                component: () => import("../components/QuoteDetails.vue")
            }
        ]
    },
    {
        path: "/editquote/:id",
        name: "QuoteEditor",
        props: true,
        component: () => import("../views/QuoteEditor.vue")
    },
    {
        path: "/create-new",
        name: "Create",
        component: () => import("../views/Create.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
