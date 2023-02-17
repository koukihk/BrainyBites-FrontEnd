<template>
  <div class="bottom">
    <div class="content">
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

      span {
        font-weight: 400;
        color: #1f2f3d;
      }
    }
    .other{

    }
  }
  
</style>