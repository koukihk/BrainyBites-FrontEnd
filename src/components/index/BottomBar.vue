<template>
  <div class="bottom">
    <div>
      <img src="../../assets/image/Logo-removebg.png"/>
      <span class="bottom-copyright">
        © 2023 | 
        BrainyBites团队  
        All Rights Reserved.
      </span>
    </div>
    <span class="bottom-other">
      <el-link href="/index">首页</el-link>&nbsp;
      <el-link href="/about" target="_blank">关于</el-link>&nbsp;
      <el-link disabled>隐私政策</el-link>&nbsp;
      <el-link disabled>联系我们</el-link>&nbsp;
    </span>
  </div>
</template>

<script>
export default {
    name: 'BottomBar',
}
</script>

<style scoped>
  .bottom {
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: 0 auto;
  }

  .bottom img {
    height: 50px;
    width: 170px;
    flex-shrink: 0;
  }

  .bottom-copyright {
    position: relative;
    left: 10px;
    bottom: 13px;
  }

  .bottom-other{
    margin-top: 20px;
  }
  
</style>