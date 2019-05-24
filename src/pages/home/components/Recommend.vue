<template>
  <div class="wrapper clearFix">
    <div class="recommend-title">热销推荐</div>
    <div class="recommend-content border-bottom" v-for="item of recommendList" :key="item.id">
      <div class="recommend-left">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="recommend-right">
        <ul>
          <li class="right-content">
            <h5>{{item.content}}</h5>
          </li>
          <li class="right-syno">
            <p><span>{{item.syno}}</span>浪漫的主体公园</p>
          </li>
          <li class="right-price">
            <span>¥<em>{{item.price}}</em></span>起
          </li>
          <li class="right-button"><button>查看详情</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
        content: "大连圣亚海洋公园",
        syno: "浪漫大连首都,",
        price: "100",
      }, {
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
        content: "大连圣亚海洋公园",
        syno: "浪漫大连首都,",
        price: "100",
      }, {
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
        content: "大连圣亚海洋公园",
        syno: "浪漫大连首都,",
        price: "100",
      }, {
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
        content: "大连圣亚海洋公园",
        syno: "浪漫大连首都,",
        price: "100",
      }, {
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
        content: "大连圣亚海洋公园",
        syno: "浪漫大连首都,",
        price: "100",
      }, {
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
        content: "大连圣亚海洋公园",
        syno: "浪漫大连首都,",
        price: "100",
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~styles/mixin.scss";
.wrapper {
  width: 100%;
  color: #000000;
  font-size: 14px;
  .recommend-title {
    height: 0.8rem;
    padding-left: 0.26rem;
    line-height: 0.8rem;
    font-weight: 700;
    background: #f5f5f5;
  }
  .recommend-content {
    position: relative;
    width: 100%;
    padding: 0.1rem;
    display: inline-block;
    .recommend-left {
      float: left;
      img {
        width: 2rem;
      }
    }
    .recommend-right {
      overflow: hidden;
      padding-left: 0.2rem;
      .right-content h5 {
        font-size: 0.32rem;
        height: 0.44rem;
        line-height: 0.44rem;
        margin-top: 0.26rem;
        font-weight: 700;
        overflow: hidden;
        @extend .ellipsis;
      }
      .right-syno {
        padding-top: 0.1rem;
        color: #616161;
        font-size: 14px;
        span {
          padding-right: 0.2rem;
        }
      }
      .right-price {
        padding-top: 0.2rem;
        font-size: 14px;
        span {
          color: #ff8300;
          font-size: 12px;
          vertical-align: bottom;
          padding-right: 0.1rem;
          em {
            font-weight: 900;
            font-size: 16px;
          }
        }
      }
      .right-button button {
        position: absolute;
        right: 0;
        bottom: 0;
        background: #ff9300;
        border-radius: 0.06rem;
        padding: 0 0.1rem;
        color: #fff;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
  }
}
</style>
