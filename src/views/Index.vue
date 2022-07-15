<template>
  <div class="index">
    <el-container>
      <el-aside width="13%">
        <sideNav />
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 16px">
          <TopHeader :userList="userList" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import store from "../store/store";
// import api from "../api";
import sideNav from "../components/index/sideNav.vue";
import TopHeader from "../components/index/TopHeader.vue";
export default {
  name: "Index",
  components: { sideNav, TopHeader },
  data() {
    return {
      userList: store.state.userinfo.data.userInfo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  scrollbar-width: none; /* Firefox  禁用滚动条 */
  -ms-overflow-style: none; /* IE 10+ */
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.el-header {
  background-color: #e6e6e6;
  color: #333;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.el-aside {
  position: fixed;
  z-index: 999;
  left: 0px;
  top: 0px;
  bottom: 0px;
}
.el-menu {
  border-right: 0;
}
.el-main {
  width: 87%;
  height: auto;
  margin-left: 13%;
  margin-top: 60px;
}
</style>
