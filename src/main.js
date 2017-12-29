// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

const store = createStore()
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
