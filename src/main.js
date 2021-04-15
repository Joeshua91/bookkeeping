import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/dateFilter'
import messagePlugin from '@/utils/messagePlugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyA6d5CFlo49quKAy7dcEHL_9NCXzKEfokc",
  authDomain: "bookkeeping-crm.firebaseapp.com",
  projectId: "bookkeeping-crm",
  storageBucket: "bookkeeping-crm.appspot.com",
  messagingSenderId: "148937479538",
  appId: "1:148937479538:web:f919289d0250f40cf779eb",
  measurementId: "G-LE2MGC9DJH"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')