import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/dateFilter'
import currencyFilter from '@/filters/currencyFilter'
import tooltipDir from '@/dir/tooltipDir'
import messagePlugin from '@/utils/messagePlugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDir)

Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyA6d5CFlo49quKAy7dcEHL_9NCXzKEfokc",
  authDomain: "bookkeeping-crm.firebaseapp.com",
  projectId: "bookkeeping-crm",
  storageBucket: "bookkeeping-crm.appspot.com",
  messagingSenderId: "148937479538",
  appId: "1:148937479538:web:f919289d0250f40cf779eb",
  measurementId: "G-LE2MGC9DJH"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



/*
// eslint-disable-next-line no-unused-vars
*/