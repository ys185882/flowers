import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Home2 from '@/components/Home2'
import Classs from '@/components/classification/Classs'
import Classs2 from '@/components/classification/Classs2'
import Hot from '@/components/classification/Hot'
import Hot2 from '@/components/classification/Hot2'
import Hot3 from '@/components/classification/Hot3'
import Hot4 from '@/components/classification/Hot4'
import Hot5 from '@/components/classification/Hot5'
import Hot6 from '@/components/classification/Hot6'
import Hot7 from '@/components/classification/Hot7'
import Search from '@/components/classification/Search'
import ShoppingCar from '@/components/shoppingcar/ShoppingCar'
import ShoppingCar2 from '@/components/shoppingcar/ShoppingCar2'
import PersonalCenter from '@/components/personalcenter/PersonalCenter'
import PersonalCenter2 from '@/components/personalcenter/PersonalCenter2'
import Register from '@/components/register/Register'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/components/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/components/Home2',
      name: 'Home2',
      component: Home2
    },
    {
      path:'/classification/Classs2',
      name:'Classs2',
      component: Classs2,
      children:[
      {
        path:'/classification/Hot',
        name:'Hot',
        component:Hot
      },
      {
        path:'/classification/Hot2',
        name:'Hot2',
        component:Hot2
      },
      {
        path:'/classification/Hot3',
        name:'Hot3',
        component:Hot3
      },
      {
        path:'/classification/Hot4',
        name:'Hot4',
        component:Hot4
      },
      {
        path:'/classification/Hot5',
        name:'Hot5',
        component:Hot5
      },
      {
        path:'/classification/Hot6',
        name:'Hot6',
        component:Hot6
      },
      {
        path:'/classification/Hot7',
        name:'Hot7',
        component:Hot7
      }
      ],
      redirect:'/classification/Hot'
    },
    {
    	path:'/classification/Classs',
    	name:'Classs',
    	component: Classs,
      children:[
      {
        path:'/classification/Hot',
        name:'Hot',
        component:Hot
      },
      {
        path:'/classification/Hot2',
        name:'Hot2',
        component:Hot2
      },
      {
        path:'/classification/Hot3',
        name:'Hot3',
        component:Hot3
      },
      {
        path:'/classification/Hot4',
        name:'Hot4',
        component:Hot4
      },
      {
        path:'/classification/Hot5',
        name:'Hot5',
        component:Hot5
      },
      {
        path:'/classification/Hot6',
        name:'Hot6',
        component:Hot6
      },
      {
        path:'/classification/Hot7',
        name:'Hot7',
        component:Hot7
      }
      ],
      redirect:'/classification/Hot'
    },
    {
      path:'/classification/Search',
      name:'Search',
      component:Search
    },
    {
      path:'/shoppingcar/ShoppingCar',
      name:'ShoppingCar',
      component:ShoppingCar
    },
    {
      path:'/shoppingcar/ShoppingCar2',
      name:'ShoppingCar222',
      component:ShoppingCar2
    },
    {
      path:'/personalcenter/PersonalCenter',
      name:'PersonalCenter',
      component:PersonalCenter
    },
    {
      path:'/personalcenter/PersonalCenter2',
      name:'PersonalCenter2',
      component:PersonalCenter2
    },
    {
      path:'/',
      name:'Register',
      component:Register
    }
  ]
})
