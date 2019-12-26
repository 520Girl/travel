<template>
  <div class="wrapper clearFix">
    <div class="recommend-title">热销推荐</div>

    <router-link class="recommend-content border-bottom" v-for="item of recommendList" :key="item.id" tag="div" :to="'/detail/'+ item.id">
      <div class="recommend-left">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="recommend-right">
        <ul>
          <li class="right-content">
            <h5>{{item.title}}</h5>
          </li>
          <li class="right-syno">
            <p><span>{{item.desc}}</span>浪漫的主体公园</p>
          </li>
          <li class="right-price">
            <span>¥<em>100</em></span>起
          </li>
          <li class="right-button"><button>查看详情</button></li>
        </ul>
      </div>
    </router-link>

  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~styles/mixin.scss";
.wrapper {
  box-sizing: border-box;
  width: 100%;
  color: #000000;
  font-size: 14px;
  .recommend-title {
    height: 0.8rem;
    box-sizing: border-box;
    padding-left: 0.26rem;
    line-height: 0.8rem;
    font-weight: 700;
    background: #f5f5f5;
  }
  .recommend-content {
    position: relative;
    width: 100%;
    padding: 0.1rem 0;
    display: inline-block;

    .recommend-left {
      padding-left: 0.1rem;
      float: left;
      img {
        width: 2rem;
      }
    }
    .recommend-right {
      overflow: hidden;
      box-sizing: border-box;
      padding-left: 0.2rem;
      .right-content h5 {
        font-size: 0.32rem;
        height: 0.44rem;
        line-height: 0.44rem;
        margin-top: 0.26rem;
        font-weight: 700;
        @extend .ellipsis;
      }
      .right-syno p {
        padding-top: 0.1rem;
        color: #616161;
        font-size: 14px;
        @extend .ellipsis;
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
