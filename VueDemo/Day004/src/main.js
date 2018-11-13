import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
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
import PhoneNumber from  './components/about/contact/PhoneNumber'
import PersonName from  './components/about/contact/PersonName'

Vue.use(VueRouter);

const router=new VueRouter({
  routes:[
    {path:'/',name:"homeLink",component:Home},
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
  ],
  mode:"history"
});

//全局守卫
//判断store.gettes.isLogin === false
router.beforeEach((to,from, next)=>{
  console.log(to);
  console.log(from);
  console.log(next);

  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
    alert("还没有登陆, 请先登陆");
    next("/login");
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
