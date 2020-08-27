<template>
  <div class="container">
    <h1>网站主页</h1>
    <!-- 数据内容 -->
    <img alt="logo" src="../assets/img/logo.png" />

    <!--3.使用组件-->
    <Footer></Footer>
  </div>
</template>

<script>
// 通用组件使用方法，参照123步骤
import Footer from "./Footer"; //1.引入组件
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    Footer //2.注册组件
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
