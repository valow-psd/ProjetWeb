import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mdpOrga: null, alias: null, currentHero: null, listeEquipe: null, currentEquipe: null, nomOrga: null, currentOrga: null
  },
  mutations: {
    setMdpOrga(state, mdpOrga) {
      state.mdpOrga = mdpOrga
    },
    setAlias(state, alias) {
        state.alias = alias
    },
    setCurrentHero(state, currentHero) {
        state.currentHero = currentHero
    },
    setListeEquipe(state, listeEquipe) {
        state.listeEquipe = listeEquipe
    },
    setCurrentEquipe(state, currentEquipe) {
        state.currentEquipe = currentEquipe
    },
    setNomOrga(state, nomOrga) {
        state.nomOrga = nomOrga
    },
    setCurrentOrga(state, currentOrga) {
        state.currentOrga = currentOrga
    }
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})
