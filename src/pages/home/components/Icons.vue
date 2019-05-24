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
        loop: false,
        pagination: '.swiper-pagination',
      },
      iconsList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
        desc: "海洋馆"
      },
      {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        desc: "景点门票"
      },
      {
        id: "0003",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/b0026eb6f96fd2daecba0d7982c7e4c8.png",
        desc: "海洋馆"
      },
      {
        id: "0004",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
        desc: "东部华侨城"
      },
      {
        id: "0005",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png",
        desc: "广东融创"
      },
      {
        id: "0006",
        imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png",
        desc: "深圳动物园"
      },
      {
        id: "0007",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
        desc: "玩转长隆"
      }, {
        id: "0008",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
        desc: "一日游"
      }, {
        id: "0009",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
        desc: "一日游"
      },]
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
  // padding-bottom: 50%;
  height: 3.7rem;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  color: #cccccc;
  padding-top: 0.2rem;
  .icons {
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
