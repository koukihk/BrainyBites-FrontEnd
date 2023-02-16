<template>
  <div class="bottom">
    <div class="content">
      <img alt="BrainyBites" src="../../assets/image/Logo-removebg.png"/>
      <span>
        © 2023 | 
        Brainy Bites团队  
        All Rights Reserved.
      </span>
    </div>
    <span class="other">
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

<style lang="scss" scoped>
  .bottom {
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: 0 auto;
    .content {
      img {
        position: relative;
        height: 35px;
        width: 120px;
        flex-shrink: 0;
        top: 25px
      }
      span {
        position: relative;
        left: 18px;
        top: 15px;
        font-weight: 400;
        color: #1f2f3d;
      }
    }
    .other{
      margin-top: 38px;
    }
  }
  
</style>