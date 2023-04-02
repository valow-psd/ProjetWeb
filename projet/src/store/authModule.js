
const state = {
    user: null,
    token: null
}

const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setToken(state, token) {
        state.token = token
    },
    clearAuth(state) {
        state.user = null
        state.token = null
    }

}

const actions = {
    setUser({ commit }, user) {
        commit('setUser', user)
    },
    setToken({ commit }, token) {
        commit('setToken', token)
    },
    clearAuth({ commit }) {
        commit('clearAuth')
    }

}

const getters = {
    isAuthenticated: state => !!state.token,
    user: state => state.user,
    token: state => state.token
}

export default {
    state,
    mutations,
    actions,
    getters
}
