<template>
  <div>
    <div class="banner" @click="handleBannerCilck">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <span class="info-number iconfont icon-tupian">39</span>
        <div class="info-title">{{this.sightName}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallayClose"></common-gallary>
    </fade-animation>

  </div>
</template>
 
<script>
import CommonGallary from 'common/gallary/Gallary' //轮播组件
import FadeAnimation from 'common/fade/FadeAnimation' //动画组件
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data() {
    return {
      showGallary: false,
      //imgs: ['http://img1.qunarzz.com/sight/p0/1902/f8/f855cec6c668dc6da3.water.jpg_r_800x800_de16e94a.jpg', 'http://img1.qunarzz.com/sight/p0/1902/f8/f855cec6c668dc6da3.water.jpg_r_800x800_de16e94a.jpg']
    }
  },
  methods: {
    handleBannerCilck() {
      this.showGallary = true;
    },
    handleGallayClose() {
      this.showGallary = false;
    }

  }
}
</script>
<style lang="scss"  scoped>
.banner {
  position: relative;
  //防止图片抖动的问题
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #ffffff;
    padding: 0.2rem 0.2rem;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    .info-title {
      font-size: 0.32rem;
    }
    .info-number {
      width: 1.2rem;
      padding: 0 0.2rem;
      margin: 0.1rem 0.1rem 0.1rem 0;
      box-sizing: border-box;
      text-align: center;
      display: inline-block;
      line-height: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>