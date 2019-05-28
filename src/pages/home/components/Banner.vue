<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showBanner">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="banner-img" :src="item.imgUrl" alt="" srcset="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeBanner",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', //这是swiper上面的点
        loop: true,
        autoplay: {
          delay: 8000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        speed: 5000,
      }
    }
  },
  computed: {
    showBanner() {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background-color: #ffffff !important;
}
.wrapper {
  padding-bottom: 28%; //宽度塌陷
  height: 0;
  background: #cccccc;
  margin-bottom: 0.2rem;
  .banner-img {
    overflow: hidden;
    width: 100%;
  }
}
</style>
