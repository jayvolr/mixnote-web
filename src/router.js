import Vue from 'vue'
import Router from 'vue-router'
import Notes from './views/Notes.vue'
import Compose from './views/Compose.vue'
import Dev from './views/tag/dev.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/compose',
      name: 'Compose',
      component: Compose
    },
    {
      path: '/tag/dev',
      name: 'Dev',
      component: Dev
    },
  ]
})
