import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'


Vue.use(VueRouter);

const router=new VueRouter({
  routes,
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

//全局守卫
//判断store.gettes.isLogin === false
router.beforeEach((to,from, next)=>{
  console.log(to);
  console.log(from);
  console.log(next);

  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
   // alert("还没有登陆, 请先登陆");
   // next("/login");
   next();
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
