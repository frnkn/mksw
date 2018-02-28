import Vue from 'vue'
import Router from 'vue-router'
import MainSearchComponent from '@/components/MainSearchComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainSearchComponent',
      component: MainSearchComponent
    }
  ]
})
