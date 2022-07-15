<template>
    <div class="notFound">
       <div class="bgc">
        <img src="../assets/404.png" alt="">
        <h3 style="font-size:40px">访问被服务器拒绝，请检查你的URL地址</h3>
       </div>
    </div>
</template>
<script>
export default {
    name:'notFound'
}
</script>
<style scoped>
.bgc{
    position: relative;
    left: 30%;
    width: 50%;
    height: 50%;
    margin-top: 10%;
}
</style>