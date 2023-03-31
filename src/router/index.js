import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/view/home"
import Login from "@/view/login"
import Layout from "@/view/layout"

Vue.use(VueRouter)


const routes = [{
        name: "Login",
        path: "/login",
        component: Login
    },
    {
        name: "Layout",
        path: "/",
        component: Layout,
        redirect: "home",
        children: [{
            name: "Home",
            path: "home",
            component: Home
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router

router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") !== null) {
            next()
        } else {
            next("/login")
        }
    }else{
        next()
    }
})