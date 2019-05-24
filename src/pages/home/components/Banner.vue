<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showBanner">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="banner-img" :src="item.imgUrl" alt="" srcset="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
        pagination: '.swiper-pagination',
        nextButton: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
        prevButton: ".swiper-button-prev",//后退按钮的css选择器或HTML元素。
        loop: true,
        autoplay: {
          delay: 8000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        speed: 5000,
      },
      swiperLists: [{
        id: '001',
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/b23a39921e8b78f38b61412d691d93ea.jpg_750x200_942ed7bd.jpg"
      }, {
        id: '002',
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5558e5b96782e91c01c52163bd315253.jpg_750x200_5031d0cc.jpg"
      }, {
        id: "003",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/60904fc24f223e0db5aee3c6148e641f.jpg_750x200_b1b90a19.jpg"
      }, {
        id: "004",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"
      }]
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
  padding-bottom: 26.6%;
  height: 0;
  background: #cccccc;
  margin-bottom: 0.2rem;
  .banner-img {
    width: 100%;
  }
}
</style>
