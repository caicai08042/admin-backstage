<template>
  <div class="Login">
    <div
      class="loginform"
      v-loading="loading"
      element-loading-text="正在登录中..."
    >
      <el-form :model="form" status-icon :rules="rules">
        <el-tabs v-model="activeName" :stretch="true">
          <el-tab-pane name="first" class="inputs"
            ><span slot="label" class="fontClass">登录</span>
            <el-form-item prop="username">
              <el-input
                v-model="form.username"
                placeholder="输入邮箱/账号名/8位ID"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                placeholder="请输入登录密码"
                show-password
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                :plain="true"
                @click="loginPost"
                class="buttons"
                >登录</el-button
              >
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane name="second"
            ><span slot="label" class="fontClass">注册</span>
            <el-result
              icon="warning"
              title="这是一个警告"
              subTitle="注册功能内测中，请联系网站管理员进行注册"
            >
            </el-result>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
import api from "../api";
export default {
  name: "Login",
  data() {
    return {
      userInfo: "",
      loading: false,
      activeName: "first",
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { type: "string", message: "请输入正确的账号", trigger: "blur" },
          { required: true, message: "请输入账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "请输入正确的密码格式", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //登录方法
    loginPost() {
      if (this.form.username && this.form.password) {
        this.loading = true;
        api.PostLogin(this.form.username, this.form.password).then((res) => {
          if (res.status >= 200 <= 300) {
            if (res.data.data.verifySuccess) {
              this.$message.success("登录成功，正在跳转中...");
              //将token存储到session中
              window.sessionStorage.setItem(
                "token",
                res.data.data.userInfo.token
              );
              //将用户信息存储到vuex中
              store.commit("getUser", res);
              setTimeout(() => {
                this.loading = false;
                this.$router.push("/index");
              }, 3000);
            } else {
              this.$message.error("账号或者密码错误，请重新登录");
              this.form.username = "";
              this.form.password = "";
              this.loading = false;
            }
          }
        });
      } else {
        this.$message.error("账号和密码不能为空！");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Login {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/bgc.svg);
}
.loginform {
  padding: 20px;
  width: 20%;
  height: 30%;
  position: relative;
  top: 30%;
  left: 40%;
  border: 1px solid rgb(184, 184, 184);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px #e2e2e2;
  min-height: 280px;
  min-width: 300px;
}
.inputs /deep/ .el-input__inner {
  border: none;
  border-radius: 0;
  border-bottom: #ff7300 1px solid;
  box-shadow: 0px 0px 0px 0px;
  margin-top: 10px;
}
.buttons {
  width: 100%;
  margin-top: 40px;
  border-radius: 15px;
}
.inputs /deep/ .el-input__suffix {
  line-height: 40px;
  height: 40px;
}
.fontClass {
  font-size: 18px;
}
</style>
