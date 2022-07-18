<template>
  <div class="wockCenter">
    <el-row :gutter="20" class="boxcards">
      <el-col :span="10">
        <MyNav />
      </el-col>
      <el-col :span="14">
        <UserInfo /> 
      </el-col>
      <el-col :span="15" style="margin-top:20px">
        <WorkOrder /> 
      </el-col>
      <el-col :span="9" style="margin-top:20px">
        <WorkOrder /> 
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyNav from "../components/WorkCenter/MyNav.vue";
import UserInfo from "../components/WorkCenter/UserInfo.vue";
import WorkOrder from "../components/WorkCenter/WorkOrder.vue";
export default {
  components: { MyNav ,UserInfo,WorkOrder},
  name: "WorkCenter",
  data() {
    return {};
  },
};
</script>
<style scoped>

</style>