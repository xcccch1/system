import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store";
import "@/style/normalize.css"
import "@/style/global.css"
import "@/style/global.less"
import "@/mock/index"
import "@/element/index"
import "@/js/iconfont"
import echarts from "@/echarts/index";
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})


