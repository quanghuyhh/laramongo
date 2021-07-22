import { SET_USER } from "../../configs/store"

const state = {
    user: {},
}

const getters = {
    user: state => state.user,
    isLogged: state => (Object.keys(state.user).length && localStorage.getItem('access_token').length) ? true : false,
    userName: state => state.user && state.user.hasOwnProperty('name') ? state.user.name : ''
}

const actions = {
    setUser ({ commit, state }, user) {
        commit(SET_USER, user)
    },
}

const mutations = {
    [SET_USER] (state, data) {
        state.user = data && data.hasOwnProperty('user') ? data.user : {};
        localStorage.setItem('access_token', data && data.hasOwnProperty('access_token') ? data.access_token : null);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}