import Vue from "vue";

const state = {
    error: null
}

const mutations = {
    setError(state, errorMessage) {
        state.error = errorMessage;
    },
    clearError(state) {
        state.error = null;
    }
}

const actions = {
    setError({ commit }, errorMessage) {
        commit('setError', errorMessage);
        Vue.toasted.error(errorMessage.message);
    },
    clearError({ commit }) {
        commit('clearError');
    }
}

const getters = {
    error: state => state.error
}

export default {
    state,
    mutations,
    actions,
    getters
}