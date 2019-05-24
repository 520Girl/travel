<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: "CitySearch"
}
</script>
<style lang="scss" scoped>
@import "~styles/varibles.scss";
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    width: 100%;
    text-align: center;
    height: 0.62rem;
    line-height: 0.62rem;
    border-radius: 0.06rem;
    color: #666666;
    padding: 0 0.1rem;
    font-size: 0.14rem;
    box-sizing: border-box;
  }
}
</style>
