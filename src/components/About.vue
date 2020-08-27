<template>
  <div class="">
    <h1>about模块</h1>

    <!-- 数据内容 -->
    <div class="">
      <h2>内容部分</h2>
    </div>
    <!--3.使用组件-->
    <Footer></Footer>
  </div>
</template>

<script>
// 通用组件使用方法，参照123步骤
import Footer from "./Footer"; //1.引入组件
export default {
  name: "About",
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
