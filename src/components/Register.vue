<template>
  <div>
    <h2>注册</h2>
    <form action="">
      用户名：<input type="text" /><br />
      邮箱：<input type="email" /><br />
      密码：<input type="password" /><br />
      确认密码：<input type="password" /><br />
      <input type="button" value="注册" /><br />
    </form>
    <!--3.使用组件-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer"; //1.引入组件
export default {
  name: "Register",
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
