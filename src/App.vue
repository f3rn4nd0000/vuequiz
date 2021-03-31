<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view name="header"/> -->
    <router-view name="navbar"/>
    <!-- <router-view name="qbox"/> -->
    <router-view name="procarea"/>
    <!-- <router-view name="sbar"/> -->
    <!-- <router-view name="ddown"/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style
    QuestionBox>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
