<template>
  <div class="header clearFix">
    <div class="header-left iconfont icon-xiajiantou1 "></div>
    <div class="header-search iconfont icon-sousuo">
      <span>输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-right iconfont icon-xiajiantou"><span>{{this.doubleCity}}</span></div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'  //使用vuex提供的映射功能简化代码
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
@import "~styles/mixin.scss";
.header {
  width: 100%;
  line-height: $headerHeight;
  color: #ffffff;
  display: flex;
  background: $bgColor;
  font-size: 14px;
  .header-left {
    float: left;
    width: 0.64rem;
    text-align: center;
  }
  .header-search {
    position: relative;
    flex: 1;
    background: #ffffff;
    height: 0.64rem;
    line-height: 0.64rem;
    color: #ccc;
    margin: 0.12rem 0;
    border-radius: 3px;
    padding-left: 0.2rem;
    span {
      margin-left: 0.1rem;
    }
  }
  .header-right {
    float: right;
    min-width: 1.04rem;
    padding: 0 0.1rem;
    text-align: center;
    color: #ffffff;
    span {
      padding-left: 0.08rem;
    }
  }
}
</style>