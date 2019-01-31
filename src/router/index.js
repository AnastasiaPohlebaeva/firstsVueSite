import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../components/Catalog.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
