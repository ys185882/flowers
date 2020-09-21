import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classs from '@/components/classification/Classs'
import Hot from '@/components/classification/Hot'
import Search from '@/components/classification/Search'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/classification/Classs',
    	name:'Classs',
    	component: Classs,
      children:[{
        path:'/classification/Hot',
        name:'Hot',
        component:Hot
      }
      ]
    },
    {
      path:'/classification/Search',
      name:'Search',
      component:Search
    }
  ]
})
