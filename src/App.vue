<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/player">Player</router-link> |
    <router-link to="/about">About</router-link>
    <!-- 用来展示路由 -->
    <router-view />
  </div>
</template>

<script>
export default {
  //ES6语法，暴露当前组件对象
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
