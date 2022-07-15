<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from "./store/store";
export default {
  name: "App",
  //解决刷新页面丢失vuex数据
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      store.replaceState(
        Object.assign(
          {},
          store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(store.state));
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
