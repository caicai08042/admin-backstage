import Vue from 'vue'
import Vuex from 'vuex'
// import api from "../api";
Vue.use(Vuex)

const actions = {

}

const mutations = {
    getUser(state,data){
        state.userinfo = data.data;
        state.token = data.data.data.userInfo.token
    }
}

const state = {
    userinfo:'',
    token:''
}

const getters = {

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
