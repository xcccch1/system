import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {}

const mutations = {
    CHANGEISCOLLAPSE(state,value){
        console.log(value);
        if(value !== undefined){
            state.isCollapse = value
        }
        state.isCollapse = !state.isCollapse
    }
}

const state = {
    token: "" || sessionStorage.getItem("token"),
    isCollapse:true
}

const getters = {}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store