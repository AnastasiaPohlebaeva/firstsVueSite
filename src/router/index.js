import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogPage from '../pages/CatalogPage.vue'
import HomePage from '../pages/HomePage.vue'
import ErrorPage from '../pages/ErrorPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue'

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
    },
    {
      path: '/catalog/:id',
      name: 'ProductDetailPage',
      component: ProductDetailPage,
      props: ''
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})
