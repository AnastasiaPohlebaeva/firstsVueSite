import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogPage from '../pages/CatalogPage.vue'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/catalog',
      name: 'CatalogPage',
      component: CatalogPage
    }
  ]
})
