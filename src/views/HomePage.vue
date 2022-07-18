<template>
  <div class="homePage">
    <el-card class="box-card" shadow="always">
      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(img, index) in imgUrl" :key="index">
            <img :src="img.url" />
            <h3 class="medium">{{ img.text }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </el-card>
    <el-card style="margin-top:20px" shadow="always">
      <div class="mains">
        <p style="font-size: 40px">让企业办公管理更简单</p>
        <p style="font-size: 18px; color: RoyalBlue">
          企业数字化升级办公一站式Saas服务平台
        </p>
        <p style="font-size: 25px; color: DarkCyan">全闭环生态化解决方案</p>
      </div>
      <el-row>
        <el-col :span="6">
          <img src="../assets/20.png" class="imgs" />
          <p class="ps">工作交流协同更加方便。</p>
        </el-col>
        <el-col :span="6">
          <img src="../assets/21.png" class="imgs" />
          <p class="ps">项目合作更加便捷！</p>
        </el-col>
        <el-col :span="6">
          <img src="../assets/22.png" class="imgs" />
          <p class="ps">工作数据一览无余。</p>
        </el-col>
        <el-col :span="6">
          <img src="../assets/23.png" class="imgs" />
          <p class="ps">工作汇报得心应手！</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "homePage",
  data() {
    return {
      imgUrl: [
        {
          url: require("@/assets/one.png"),
          text:'123'
        },
        {
          url: require("@/assets/two.png"),
          text:'123'
        },
        {
          url: require("@/assets/three.png"),
          text:'123'
        },
      ],
    };
  },
};
</script>
<style scoped>
.homePage {
  padding: 0;
  margin: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.boxcards {
   margin-top: 0px; 
}
.mains {
  width: 30%;
  position: relative;
  top: 50%;
  left: 35%;
  text-align: center;
}
.ps {
  font-size: 18px;
  text-align: center;
  color: rgb(44, 178, 255);
}
.imgs {
  width: 90%;
  height: 90%;
  border: 2px solid rgb(218, 218, 218);
  border-radius: 20%;
  margin-top: 20px;
}
</style>