<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont icon-zuojiantou"></span>
    </router-link>
    <span>城市选择</span>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
}
</script>
<style lang="scss" scoped>
@import "~styles/varibles.scss";
.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;
  .iconfont {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.5rem;
    color: #ffffff;
  }
}
</style>
