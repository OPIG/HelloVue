<template>
  <div id="app">
	<app-header v-bind:contData="cont" v-on:titleChange="titleChanged($event)"></app-header>
    <img src="./assets/logo.png">
	<router-view></router-view>
  <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
  "app-header":Header,
  "app-footer":Footer
  },
  data(){
	return {
		cont:"THIS IS CONTENT"
	}
  },
  methods:{
	  titleChanged(data){
      this.cont=data;
	  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
