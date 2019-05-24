<template>
  <div>
    <home-header :city="city"></home-header>
    <home-banner :swiperList="swiperList"></home-banner>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <div>标题</div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []

    }
  },
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  methods: {
    getHomeInfo() {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
<style lang="scss" scoped>
</style>
