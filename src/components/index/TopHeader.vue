<template>
  <div class="TopHeader">
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