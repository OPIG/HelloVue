<template>
  <div id="app">
    <app-header v-on:titleChange="titleChanges($event)" v-bind:titleValue="titleOld"></app-header>
    <app-content></app-content>
    <app-footer v-bind:titleValue="titleOld"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    "app-header":Header,
    "app-content":Content,
    "app-footer":Footer
  },
  data(){
    return{
       titleOld:"this is old title"
    }
  },
  methods:{
    titleChanges:function(newTitle){
        this.titleOld=newTitle
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
  margin-top: 60px;
}
</style>
