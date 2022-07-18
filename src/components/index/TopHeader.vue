<template>
  <div class="TopHeader">
    <span class="gsm">
      <img src="../../assets/logo.png" class="imgs">
      <span class="titles">字节科技有限公司</span>
    </span>
    <span>欢迎您 {{ userList.username }}</span>
    <el-dropdown>
      <i
        class="el-icon-setting"
        style="
          margin-left: 15px;
          font-size: 20px;
          vertical-align: top;
          line-height: 60px;
        "
      ></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="goMe">我的主页</el-dropdown-item>
        <el-dropdown-item @click.native="goIndex">回到首页</el-dropdown-item>
        <el-dropdown-item :divided="true" @click.native="toBack"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "TopHeader",
  props: {
    userList: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      user: {
        name: "asdas",
      },
    };
  },
  methods: {
    goIndex() {
      console.log("index");
    },
    goMe() {
      console.log("index");
    },
    toBack() {
      this.$router.push("/");
      window.sessionStorage.clear();
    },
  },
};
</script>
<style scoped>
.gsm{
  float: left;
  font-size: 20px;
  font-family: ‘Microsoft YaHei’;
  height: 60px;
}
.imgs{
  width: 40px;
  height: 40px;
  margin-top: 10px;
  display: inline-block;
  vertical-align: top;
}
.titles{
  display: inline-block;
  line-height: 60px;
  height: 60px;
  margin-left: 10px;
  vertical-align: top;
}
</style>