<template>
  <div class="nav">
    <el-menu
      style="height: 100vh"
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      router
    >
      <el-menu-item index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-monitor"></i>
        <span slot="title">工作中心</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span>工单中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">工单列表</el-menu-item>
          <el-menu-item index="3-2">备注</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-data-analysis"></i>
          <span>项目中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">项目列表</el-menu-item>
          <el-menu-item index="4-2">我的项目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>部门服务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">部门列表</el-menu-item>
          <el-menu-item index="5-2">我的部门</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>数据中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">数据概览</el-menu-item>
          <el-menu-item index="6-2">备注</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>后台管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">工作人员管理</el-menu-item>
          <el-menu-item index="7-2">权限配置</el-menu-item>
          <el-menu-item index="7-3">个人中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-help"></i>
          <span>帮助中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">使用及帮助</el-menu-item>
          <el-menu-item index="8-2">BUG反馈</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "sideNav",
  data() {
    return {};
  },
};
</script>
<style scoped>
.el-menu-vertical-demo {
  border: none;
}
.el-menu-item {
  line-height: 60px;
  height: 60px;
  font-size: 15px;
}
.el-submenu /deep/ .el-submenu__title{
  line-height: 60px;
  height: 60px;
  font-size: 15px;
}
.el-menu-item-group /deep/ .el-menu-item-group__title {
  display: none;
}
</style>