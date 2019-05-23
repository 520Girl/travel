<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
    <div>标题</div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner
  }
}
</script>
<style lang="scss" scoped>
</style>
