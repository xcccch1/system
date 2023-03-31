import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {}

const mutations = {}

const state = {
    token: "" || sessionStorage.getItem("token")
}

const getters = {}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store