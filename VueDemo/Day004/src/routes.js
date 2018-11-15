import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
//三级路由
import PhoneNumber from  './components/about/contact/PhoneNumber'
import PersonName from  './components/about/contact/PersonName'

export const routes=[
    {path:'/',name:"homeLink",components:{
      default:Home,
      'delivery-reuse':Delivery,
      'order-reuse':OrderingGuide,
      'history-reuse':History
    }
  },
    {path:'/menu',name:"menuLink",component:Menu},
    {path:'/admin',name:"adminLink",component:Admin},
    {path:'/about',name:"aboutLink",redirect:"/delivery",component:About,children:[
      {path:'/history',name:"historyLink",component:History},
      {path:'/about/contact',name:"contactLink",redirect:"/personname",component:Contact,children:[
        {path:'/phonenumber',name:"phonNumberLink",component:PhoneNumber},
        {path:'/personname',name:"personNameLink",component:PersonName}
      ]},
      {path:'/delivery',name:"deliveryLink",component:Delivery},
      {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
    ]},
    {path:'/login',name:"loginLink",component:Login},
    {path:'/register',name:"registerLink",component:Register},
    {path:'*',redirect:'/'}//default router
  ]