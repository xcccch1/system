import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/view/home"
import Login from "@/view/login"
import Layout from "@/view/layout"
import Users from "@/view/users"

Vue.use(VueRouter)


const routes = [{
        name: "Login",
        path: "/login",
        component: Login,
        meta: { breadcrumb: "登录页" }
    },
    {
        name: "Layout",
        path: "/",
        component: Layout,
        redirect: "home",
        children: [
            { name: "Home", path: "home", component: Home, meta: { breadcrumb: "首页" } },
            { name: "Users", path: "users", component: Users, meta: { breadcrumb: "用户列表" } }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router

router.beforeEach((to, from, next) => {
    // console.log(to, from);
    if (to.path !== "/login") {
        if (sessionStorage.getItem("token") !== null) {
            next()
        } else {
            next("/login")
        }
    } else {
        next()
    }
})