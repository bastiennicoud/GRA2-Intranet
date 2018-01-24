/**
 * Entry point of the app
 *
 * Bastien Nicoud
 */

// library imports
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Schedule from 'vue-schedule'

// import app router and store
import router from './router'
import store from './store'

// import app components
import App from './App'

// Initialize
Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Schedule: Schedule },
  router,
  store,
  render: h => h(App)
})
