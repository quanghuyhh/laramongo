import { SET_LOADING } from "../../configs/store"

const state = {
    loading: true,
}

const getters = {
    loading: state => state.loading,
}

const actions = {
    setLoading ({ commit, state }, status) {
        commit(SET_LOADING, state)
    },
}

const mutations = {
    [SET_LOADING] (state, data) {
        state.loading = data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}