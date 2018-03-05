<template>

  <div id="app">
    <a href="/"><img class="logo" src="./assets/pig_2.svg"></a>
    <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html {
  min-height: 100%;
  position: relative;
}
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
