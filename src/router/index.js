import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
// import D33 from '@/components/d3'
import Anime from '@/components/anime'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/asda',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path:'/',
    name:'Index',
    component:Index
  },
  {
    path:'/1',
    name:'Anime',
    component:Anime
  }]
})
