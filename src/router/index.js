import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Home2 from '@/components/Home2'
import HotSale from '@/components/HotSale'
import LoveFlowers from '@/components/LoveFlowers'
import LoveFlowers2 from '@/components/LoveFlowers2'
import Evaluate from '@/components/Evaluate'
import Classs from '@/components/classification/Classs'
import Classs2 from '@/components/classification/Classs2'
import Hot from '@/components/classification/Hot'
import Hot2 from '@/components/classification/Hot2'
import Hot3 from '@/components/classification/Hot3'
import Hot4 from '@/components/classification/Hot4'
import Hot5 from '@/components/classification/Hot5'
import Hot6 from '@/components/classification/Hot6'
import Hot7 from '@/components/classification/Hot7'
import Hot8 from '@/components/classification/Hot8'
import Hot9 from '@/components/classification/Hot9'
import Hot10 from '@/components/classification/Hot10'
import Hot11 from '@/components/classification/Hot11'
import Hot12 from '@/components/classification/Hot12'
import Hot13 from '@/components/classification/Hot13'
import Hot14 from '@/components/classification/Hot14'
import Search from '@/components/classification/Search'
import ShoppingCar from '@/components/shoppingcar/ShoppingCar'
import ShoppingCar2 from '@/components/shoppingcar/ShoppingCar2'
import PersonalCenter from '@/components/personalcenter/PersonalCenter'
import PersonalCenter2 from '@/components/personalcenter/PersonalCenter2'
import Register from '@/components/register/Register'
import Customerservice from '@/components/personalcenter/Customerservice'
import OnlineMessage from '@/components/personalcenter/OnlineMessage'
import consult from '@/components/personalcenter/consult'
import proposal from '@/components/personalcenter/proposal'
import About from '@/components/personalcenter/about/About'
import About2 from '@/components/personalcenter/about/About2'
import Culture from '@/components/personalcenter/about/Culture'
import Dynamic from '@/components/personalcenter/about/Dynamic'
import Media from '@/components/personalcenter/about/Media'
import Approval from '@/components/personalcenter/about/Approval'
import Culture2 from '@/components/personalcenter/about/Culture2'
import Dynamic2 from '@/components/personalcenter/about/Dynamic2'
import Media2 from '@/components/personalcenter/about/Media2'
import Approval2 from '@/components/personalcenter/about/Approval2'
import Coupon from '@/components/personalcenter/coupon/coupon'
import Invalid from '@/components/personalcenter/coupon/Invalid'
import Nouse from '@/components/personalcenter/coupon/Nouse'
import Used from '@/components/personalcenter/coupon/Used'
import Help from '@/components/personalcenter/help/Help'
import Order from '@/components/personalcenter/order/Order'
import Allorder from '@/components/personalcenter/order/Allorder'
import Payment from '@/components/personalcenter/order/Payment'
import Delivery from '@/components/personalcenter/order/Delivery'
import Evaluates from '@/components/personalcenter/order/Evaluates'
import EquityCard from '@/components/personalcenter/equitycard/EquityCard'
import Balance from '@/components/personalcenter/balance/Balance'
import Integral from '@/components/personalcenter/integral/Integral'
import Dirthday from '@/components/personalcenter/dirthday/Dirthday'
import Address from '@/components/personalcenter/address/Address'
import Collect from '@/components/personalcenter/collect/Collect'
import Sets from '@/components/personalcenter/set/Sets'
import New from '@/components/new/New'
import Newflowers from '@/components/new/Newflowers'
import Gift from '@/components/new/Gift'
import Yongshenghua from '@/components/new/Yongshenghua'
import Pinwei from '@/components/pinweizhixuan/Pinwei'
import DesignerSelector from '@/components/DesignerSelector/DesignerSelector'
import Client from '@/components/client/Client'

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
      path: '/components/HotSale',
      name: 'HotSale',
      component: HotSale
    },
    {
      path: '/components/LoveFlowers',
      name: 'LoveFlowers',
      component: LoveFlowers
    },
    {
      path: '/components/LoveFlowers2',
      name: 'LoveFlowers2',
      component: LoveFlowers2
    },
    {
      path: '/components/Evaluate',
      name: 'Evaluate',
      component: Evaluate
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
        path:'/classification/Hot8',
        name:'Hot8',
        component:Hot8
      },
      {
        path:'/classification/Hot9',
        name:'Hot9',
        component:Hot9
      },
      {
        path:'/classification/Hot10',
        name:'Hot10',
        component:Hot10
      },
      {
        path:'/classification/Hot11',
        name:'Hot11',
        component:Hot11
      },
      {
        path:'/classification/Hot12',
        name:'Hot12',
        component:Hot12
      },
      {
        path:'/classification/Hot13',
        name:'Hot13',
        component:Hot13
      },
      {
        path:'/classification/Hot14',
        name:'Hot14',
        component:Hot14
      }
      ],
      redirect:'/classification/Hot8'
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
      path:'/personalcenter/Customerservice',
      name:'Customerservice',
      component:Customerservice
    },
    {
      path:'/personalcenter/OnlineMessage',
      name:'OnlineMessage',
      component:OnlineMessage,
      children:[
      {
        path:'/personalcenter/consult',
        name:'consult',
        component:consult
      },
      {
        path:'/personalcenter/proposal',
        name:'proposal',
        component:proposal
      }
      ],
      redirect:'/personalcenter/consult'
    },
    {
      path:'/personalcenter/about/About',
      name:'About',
      component:About
    },
    {
      path:'/personalcenter/about/Culture',
      name:'Culture',
      component:Culture
    },
    {
      path:'/personalcenter/about/Dynamic',
      name:'Dynamic',
      component:Dynamic
    },
    {
      path:'/personalcenter/about/Media',
      name:'Media',
      component:Media
    },
    {
      path:'/personalcenter/about/Approval',
      name:'Approval',
      component:Approval
    },
    {
      path:'/personalcenter/about/About2',
      name:'About2',
      component:About2
    },
    {
      path:'/personalcenter/about/Culture2',
      name:'Culture2',
      component:Culture2
    },
    {
      path:'/personalcenter/about/Dynamic2',
      name:'Dynamic2',
      component:Dynamic2
    },
    {
      path:'/personalcenter/about/Media2',
      name:'Media2',
      component:Media2
    },
    {
      path:'/personalcenter/about/Approval2',
      name:'Approval2',
      component:Approval2
    },
    {
      path:'/personalcenter/set/Sets',
      name:'Sets',
      component:Sets
    },
    {
      path:'/personalcenter/coupon/coupon',
      name:'Coupon',
      component:Coupon,
      children:[
        {
          path:'/personalcenter/coupon/Invalid',
          name:'Invalid',
          component:Invalid
        },
        {
          path:'/personalcenter/coupon/Used',
          name:'Used',
          component:Used
        },
        {
          path:'/personalcenter/coupon/Nouse',
          name:'Nouse',
          component:Nouse
        }
      ],
      redirect:'/personalcenter/coupon/Nouse'
    },
    {
      path:'/personalcenter/help/Help',
      name:'Help',
      component:Help
    },
    {
      path:'/personalcenter/order/Order',
      name:'Order',
      component:Order,
      children:[
        {
          path:'/personalcenter/order/Allorder',
          name:'Allorder',
          component:Allorder
        },
        {
          path:'/personalcenter/order/Payment',
          name:'Payment',
          component:Payment
        },
        {
          path:'/personalcenter/order/Delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/personalcenter/order/Evaluates',
          name:'Evaluates',
          component:Evaluates
        },
      ],
      redirect:'/personalcenter/order/Allorder'
    },
    {
      path:'/personalcenter/equitycard/EquityCard',
      name:'EquityCard',
      component:EquityCard
    },
    {
      path:'/personalcenter/balance/Balance',
      name:'Balance',
      component:Balance
    },
    {
      path:'/personalcenter/integral/Integral',
      name:'Integral',
      component:Integral
    },
    {
      path:'/personalcenter/dirthday/Dirthday',
      name:'Dirthday',
      component:Dirthday
    },
    {
      path:'/personalcenter/address/Address',
      name:'Address',
      component:Address
    },
    {
      path:'/personalcenter/collect/Collect',
      name:'Collect',
      component:Collect
    },
    {
      path:'/new/New',
      name:'New',
      component:New,
      children:[
        {
          path:'/new/Newflowers',
          name:'Newflowers',
          component:Newflowers
        },
        {
          path:'/new/Yongshenghua',
          name:'Yongshenghua',
          component:Yongshenghua
        },
        {
          path:'/new/Gift',
          name:'Gift',
          component:Gift
        }
      ],
        redirect:'/new/Newflowers'
    },
    {
      path:'/pinweizhixuan/Pinwei',
      name:'Pinwei',
      component:Pinwei
    },
    {
      path:'/DesignerSelector/DesignerSelector',
      name:'DesignerSelector',
      component:DesignerSelector
    },
    {
      path:'/client/Client',
      name:'Client',
      component:Client
    },
    {
      path:'/',
      name:'Register',
      component:Register
    }
  ]
})
