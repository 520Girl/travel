<template>
  <div class="gallay" @click="handleGallaryClick">
    <div class="container">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img class="wrapper-img" :src="item" alt="" srcset="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "CommonGallay ",
  props: {
    imgs: {
      type: Array,
      default() {
        return ['http://img1.qunarzz.com/sight/p0/1902/f8/f855cec6c668dc6da3.water.jpg_r_800x800_de16e94a.jpg', 'http://img1.qunarzz.com/sight/p0/1902/f8/f855cec6c668dc6da3.water.jpg_r_800x800_de16e94a.jpg']
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick() {//点击关闭
      this.$emit('close')
    }
  }

}
</script>
<style lang="scss"  scoped>
.container /deep/ .swiper-pagination {
  position: inherit;
  padding-top: 1rem;
  overflow: inherit;
}
.gallay {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 99;
    .wrapper {
      //撑出一个方框
      // overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .wrapper-img {
        width: 100%;
      }
      .swiper-pagination {
        color: #ffffff;
        //bottom: -1rem;
      }
    }
  }
}
</style>