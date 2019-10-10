<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <semipolar-spinner
    :animation-duration="2000"
    :size="65"
    color="#ff1d5e"
  />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {SemipolarSpinner} from 'epic-spinners'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SemipolarSpinner
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
