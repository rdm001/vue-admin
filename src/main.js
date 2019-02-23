import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import './styles/common.css'
import elementUi from 'element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
