// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //在页面中引入vue.js
import App from './App' //引入自定义组件
import router from './router' //引入vue router js
import axios from 'axios' //引入axios
/* 导入vue-video-player组件 */
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.prototype.$http = axios   //修改内部的$http为axios

/* eslint-disable no-new */
new Vue({ //vue全局实例
  el: '#app', //绑定Vue实例全局作用范围
  router, //注册路由对象
  components: {
    App
  }, //注册App组件
  template: '<App/>' //
})
