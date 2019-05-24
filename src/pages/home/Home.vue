<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <div>标题</div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeRecommend
  }
}
</script>
<style lang="scss" scoped>
</style>
