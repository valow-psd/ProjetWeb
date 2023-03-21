import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OrganisationView from '@/views/OrganisationView.vue'
import HereosView from '@/views/HeroesView.vue'
import TeamsView from '@/views/TeamsView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Organisation',
    name: 'organisation',
    component: OrganisationView
  },{
    path: '/Teams',
    name: 'teams',
    component: TeamsView
  },{
    path: '/Hereos',
    name: 'hereos',
    component: HereosView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
