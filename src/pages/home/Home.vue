<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <home-icons></home-icons>
    <div>标题</div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
  }
}
</script>
<style lang="scss" scoped>
</style>
