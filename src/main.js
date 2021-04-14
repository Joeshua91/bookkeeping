import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import dateFilter from '@/filters/dateFilter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
