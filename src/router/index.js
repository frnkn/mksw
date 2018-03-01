import Vue from 'vue'
import Router from 'vue-router'
import MainSearchComponent from '@/components/MainSearchComponent'
import DetailComponent from '@/components/DetailComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainSearchComponent',
      component: MainSearchComponent
    },
    {
      path: '/detail/:area_id/:street_name',
      name: 'DetailComponent',
      component: DetailComponent,
      props: true
    }
  ]
})
