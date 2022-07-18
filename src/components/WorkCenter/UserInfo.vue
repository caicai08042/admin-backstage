<template>
  <div>
    <el-card shadow="hover" style="height: 200px">
      <el-descriptions title="用户信息" :column="5" border>
        <el-descriptions-item label="头像">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </el-descriptions-item>
        <el-descriptions-item label="用户名">{{userinfo.username}}</el-descriptions-item>
        <el-descriptions-item label="部门">{{userinfo.department}}</el-descriptions-item>
        <el-descriptions-item label="职位">{{userinfo.position}}</el-descriptions-item>
        <el-descriptions-item label="企业邮箱">{{userinfo.email}}</el-descriptions-item>
        <el-descriptions-item label="内网权限">{{userinfo.nwqx}}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{userinfo.phone}}</el-descriptions-item>
        <el-descriptions-item label="联系地址" :span="2"
          >{{userinfo.lxdz}}</el-descriptions-item
        ><el-descriptions-item label="备注">
          <el-tag size="small">{{userinfo.bz}}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>
<script>
import store from "../../store/store";
export default {
  name: "UserInfo",
  data() {
    return {
        userinfo:''
    };
  },
  mounted(){
        this.userinfo = store.state.userinfo.data.userInfo
  }
};
</script>
<style scoped>

</style>