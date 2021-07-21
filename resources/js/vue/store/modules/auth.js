import { SET_USER } from "../../configs/store"

const state = {
    user: {},
}

const getters = {
    user: state => state.user,
    isLogged: state => (Object.keys(state.user).length && localStorage.getItem('access_token').length) ? true : false,
}

const actions = {
    setUser ({ commit, state }, user) {
        commit(SET_USER, user)
    },
}

const mutations = {
    [SET_USER] (state, data) {
        state.user = data.hasOwnProperty('user') ? data.user : {};
        localStorage.setItem('access_token', data.access_token);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}