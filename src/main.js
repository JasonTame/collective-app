import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes.js'
import 'bulma/css/bulma.css'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { x: 0, y: 0}
    }
  }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
