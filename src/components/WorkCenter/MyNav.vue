<template>
  <div>
    <el-card shadow="hover" style="height:200px">
      <div slot="header" class="clearfix">
        <span style="font-size:16px">我的导航</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div>
        <el-row :gutter="20">
            <el-col :span="6"><el-button size="medium">工单中心</el-button></el-col>
            <el-col :span="6"><el-button size="medium">项目列表</el-button></el-col>
            <el-col :span="6"><el-button size="medium">我的项目</el-button></el-col>
            <el-col :span="6"><el-button size="medium">部门列表</el-button></el-col>
            <el-col :span="6"><el-button size="medium">我的部门</el-button></el-col>
            <el-col :span="6"><el-button size="medium">数据中心</el-button></el-col>
            <el-col :span="6"><el-button size="medium">权限配置</el-button></el-col>
            <el-col :span="6"><el-button size="medium">帮助中心</el-button></el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "MyNav",
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.el-row /deep/ .el-col{
    margin-top: 10px;
}
.el-col /deep/ .el-button{
    width: auto;
}
</style>