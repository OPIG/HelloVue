// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Users from './components/Users'
import VueRosource from 'vue-resource'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueRosource)

const router=new VueRouter({
	routes:[
	{path:'/user',component: Users},
	{path:'/hello',component: HelloWorld}
	],
	mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
