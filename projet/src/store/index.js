import Vue from 'vue'
import Vuex from 'vuex'
import {createTeams, getTeams} from '@/service/teams.service.js';
import {createOrganisation, getOrganisation} from '@/service/organisations.service.js';
import {createHero, getHeroAliases} from "@/service/heroes.service";
import errorModule from './errorModule';
import authModule from './authModule';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mdpOrga: null,
        listeHeroes: [],
        currentHero: null,
        listeEquipe: [],
        currentEquipe: null,
        listeOrga: [],
        currentOrga: null
    },
    mutations: {
        setMdpOrga(state, mdpOrga) {
            state.mdpOrga = mdpOrga
        },
        setListeHeroes(state, listeHeroes) {
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
        },
        createTeam(state, equipe){
            state.listeEquipe.push(equipe)
        },
        createOrg(state, org){
            state.listeOrga.push(org);
        },
        createHero(state, hero){
            state.listeHeroes.push(hero);
        }
    },
    actions: {
        async registerOrga({commit}, {name, secret}) {
            try {
                const org = await createOrganisation({name, secret});
                commit("createOrg", org)
            }catch (error) {
                console.log('Error:', error)
            }
        },
        async registerTeam({commit}, team) {
            try {
                const nouvelleEquipe = await createTeams(team);
                commit('createTeam', nouvelleEquipe.data.data);
            }catch(error) {
                console.log('Error:', error)
            }
        },
        async registerHero({commit}, {publicName, realName}) {
            try {
                const hero = await createHero({publicName, realName});
                commit("createHero", hero);
            }catch (error){
                console.log('Error:', error)
            }
        },

        async getListeHero({commit}){
            try{
                const listeHeroes = await getHeroAliases();
                commit("setListeHeroes", listeHeroes.data.data);
            }catch(error) {
                console.log('Error:', error);
            }
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
        },
        updateCurrentHero({commit}, currentHero) {
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
        },
        async getListeEquipe({commit}){
            try{
                const listeEquipe = await getTeams();
                commit("setListeEquipe", listeEquipe.data.data);
            }catch(error) {
                console.log('Error:', error);
            }
        },
        getCurrentEquipe({commit}, currentEquipe) {
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
        },
        updateCurrentTeam({commit}, currentEquipe) {
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
        },
        async getListeOrga({commit}){
            try{
                const listeOrga = await getOrganisation();
                commit("setListeOrga", listeOrga.data.data);
            }catch (error){
                console.log('Error:', error);
            }
        },
        getCurrentOrga({commit}, currentOrga) {
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
        },
        updateCurrentOrga({commit}, currentOrga) {
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

    }, modules: {
        errorModule,
        authModule
    }
})
