<template>
  <div>
    <h2>登录</h2>
    <form action="">
      邮箱：<input type="email" /><br />
      密码：<input type="password" /><br />
      <input type="button" value="登录" /><br />
    </form>
    <!--3.使用组件-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer"; //1.引入组件
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},
  components: {
    Footer //2.注册组件
  }
};
</script>

<style scoped></style>
