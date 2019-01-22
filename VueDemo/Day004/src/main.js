import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
<<<<<<< HEAD
import {routes} from './routes2'
=======
import { routes } from './routes'

>>>>>>> a25f8b57d6c463806bf1a25aa0781519e6b28733

Vue.use(VueRouter);

const router=new VueRouter({
  routes,
<<<<<<< HEAD
  mode: 'history'
})
=======
   mode:"history",
   scrollBehavior(to,from,savedPosition){
    //return {x:0,y:100}
    //return {selector: '.btn'}
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0, y:120}
    }
   }
});

>>>>>>> a25f8b57d6c463806bf1a25aa0781519e6b28733
//全局守卫
//判断store.gettes.isLogin === false
router.beforeEach((to,from, next)=>{
  console.log(to);
  console.log(from);
  console.log(next);

  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
<<<<<<< HEAD
    //alert("还没有登陆, 请先登陆");
    //next("/login");
    next();
=======
   // alert("还没有登陆, 请先登陆");
   // next("/login");
   next();
>>>>>>> a25f8b57d6c463806bf1a25aa0781519e6b28733
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
