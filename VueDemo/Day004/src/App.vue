<template>
  <div id="app">
    <div class="container mb-5">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
<<<<<<< HEAD
    <div class="container">
        <div class="col-md-4">
            <router-view name="telnum"></router-view>
        </div>
        <div class="col-md-4">
            <router-view name="hist"></router-view>
        </div>
        <div class="col-md-4">
            <router-view name="deli"></router-view>
        </div>
    </div>
     <div class="container">
=======
    <br/>
    <div class="container">
      <div class="row">
        <div class="col-md-4"><router-view name="delivery-reuse"></router-view></div>
        <div class="col-md-4"><router-view name="order-reuse"></router-view></div>
        <div class="col-md-4"><router-view name="history-reuse"></router-view></div>
      </div>
    </div>
   <div class="container">
>>>>>>> a25f8b57d6c463806bf1a25aa0781519e6b28733
     <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    "app-header": Header,
    "app-footer": Footer
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

h1, h2 {
  font-weight: normal;
}

</style>
