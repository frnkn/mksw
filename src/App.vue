<template>

  <div id="app">
    <loading-screen v-if="isLoading"></loading-screen>
    <img class="logo" src="./assets/pig_2.svg">
    <router-view/>
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen';

export default {
  name: 'App',
  data: {
    isLoading: true
  },
  mounted (){
    setTimeout(() => {
      this.isLoading = false; 
    }, 3000)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  margin-top: 20px;
}

.logo {
  width: 150px;
}
</style>
