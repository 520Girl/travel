<template>
  <div class="wrapper border-bottom">
    <ul class="icons clearFix">
      <swiper :options="swiperIcons">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <li v-for="item of page" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <p>{{item.desc}}</p>
          </li>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperIcons: {
        loop: false, //是否进行轮播
        pagination: '.swiper-pagination', //轮播下面的点
      },
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const indexs = Math.floor(index / 8);
        if (!pages[indexs]) { //只是为了判断是否为数组
          pages[indexs] = []
        }
        pages[indexs].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~styles/mixin.scss";
.icons /deep/ .swiper-container {
  // height: 0;
  //padding-bottom: 50%;
  height: 3.7rem;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  color: #cccccc;
  padding-top: 0.2rem;
  .icons {
    overflow: hidden;
    padding: 0.05rem;
    li {
      float: left;
      width: 25%;
      text-align: center;
      img {
        width: 1.1rem;
        margin-bottom: 5px;
      }
      p {
        margin-bottom: 5px;
        color: #000;
        @extend .ellipsis;
      }
    }
  }
}
</style>
