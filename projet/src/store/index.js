import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mdpOrga: null, listeHeroes: null, currentHero: null, listeEquipe: null, currentEquipe: null, listeOrga: null, currentOrga: null
  },
  mutations: {
    setMdpOrga(state, mdpOrga) {
      state.mdpOrga = mdpOrga
    },
    setListeHeroes(state, listeHeroes) {
        console.log("oui")
        state.listeHeroes = listeHeroes
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
    setListeOrga(state, listeOrga) {
        state.listeOrga = listeOrga
    },
    setCurrentOrga(state, currentOrga) {
        state.currentOrga = currentOrga
    }
  },
  actions: {
    registerOrga({commit}, mdpOrga) {
      this.state = fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
        method: 'POST', headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify(mdpOrga)
      })
          .then(response => response.json())
          .then(response => {
            commit('setMdpOrga', response.data)
          })
          .catch(error => console.log('Error:', error))
    }, 
    
    getListeHero({commit}, alias) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/heroes/getaliases' , {
        method: 'GET', headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify(alias)
      })
          .then(response => response.json())
          .then(response => {
            commit('setListeHeroes', response.data)
          })
          .catch(error => console.log('Error:', error))
    },
    
    getCurrentHero({commit}, currentHero) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
        method: 'GET', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(currentHero)
        })
            .then(response => response.json())
            .then(response => {
                commit('setCurrentHero', response.data)
            })
            .catch(error => console.log('Error:', error))
    }, updateCurrentHero({commit}, currentHero) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(currentHero)
        })
            .then(response => response.json())
            .then(response => {
                commit('setCurrentHero', response.data)
            })
            .catch(error => console.log('Error:', error))
      }, getListeEquipe({commit}, listeEquipe) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/teams/get', {
          method: 'GET', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(listeEquipe)
        })
            .then(response => response.json())
            .then(response => {
                commit('setListeEquipe', response.data)
            })
            .catch(error => console.log('Error:', error))
      }, getCurrentEquipe({commit}, currentEquipe) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(currentEquipe)
        })
            .then(response => response.json())
            .then(response => {
                commit('setCurrentEquipe', response.data)
            })
            .catch(error => console.log('Error:', error))
      }, updateCurrentTeam({commit}, currentEquipe) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
            method: 'PUT', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(currentEquipe)
        })
            .then(response => response.json())
            .then(response => {
                commit('setCurrentEquipe', response.data)
            })
            .catch(error => console.log('Error:', error))
      }, getListeOrga({commit}, nomOrga) {
      this.state.nomOrga = fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/get', {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(nomOrga)
        })
            .then(response => response.json())
            .then(response => {
                commit('setListeOrga', response.data)
            })
            .catch(error => console.log('Error:', error))
      }, getCurrentOrga({commit}, currentOrga) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(currentOrga)
        })
            .then(response => response.json())
            .then(response => {
                commit('setCurrentOrga', response.data)
            })
            .catch(error => console.log('Error:', error))
      }, updateCurrentOrga({commit}, currentOrga) {
      return fetch('https://apidemo.iut-bm.univ-fcomte.fr/herocorp/orgs/getbyid/63bfe549458c2ed0e63ac4f7?org-secret=nous%20sommes%20mechants', {
            method: 'PUT', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(currentOrga)
        })
            .then(response => response.json())
            .then(response => {
                commit('setCurrentOrga', response.data)
            })
            .catch(error => console.log('Error:', error))
      }

  },
  getters: {
    getListeHeroes: state => state.listeHeroes,
    getCurrentHero: state => state.currentHero,
    getListeEquipe: state => state.listeEquipe,
    getCurrentEquipe: state => state.currentEquipe,
    getListeOrga: state => state.listeOrga,
    getCurrentOrga: state => state.currentOrga

  }
})
