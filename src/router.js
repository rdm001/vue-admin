import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from './pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'./pages/home'},
    {path:'./pages/home',component:homeComponent}
    
  ]
})
