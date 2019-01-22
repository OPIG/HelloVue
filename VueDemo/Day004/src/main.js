import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes2'

Vue.use(VueRouter);

const router=new VueRouter({
  routes,
  mode: 'history'
})
//全局守卫
//判断store.gettes.isLogin === false
router.beforeEach((to,from, next)=>{
  console.log(to);
  console.log(from);
  console.log(next);

  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
    //alert("还没有登陆, 请先登陆");
    //next("/login");
    next();
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
