<template>
  <div class="wrapper clearFix">
    <div class="recommend-title">周末去哪儿</div>
    <div class="recommend-content" v-for="item of weekendList" :key="item.id">
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
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
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
  width: 100%;
  color: #000000;
  font-size: 14px;
  .recommend-title {
    box-sizing: border-box;
    width: 100%;
    height: 0.8rem;
    padding-left: 0.26rem;
    line-height: 0.8rem;
    font-weight: 700;
    background: #f5f5f5;
  }
  .recommend-content {
    .recommend-left {
      box-sizing: border-box;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      overflow: hidden;
      height: 0;
      padding-bottom: 37.4375%;
      img {
        width: 100%;
      }
    }
    .recommend-right {
      overflow: hidden;
      padding-left: 0.2rem;
      padding-bottom: 0.2rem;
      .right-content h5 {
        font-size: 0.28rem;
        height: 0.44rem;
        line-height: 0.44rem;
        margin-top: 0.26rem;
        overflow: hidden;
        @extend .ellipsis;
      }
      .right-syno {
        color: #616161;
        font-size: 14px;
        span {
          padding-right: 0.2rem;
        }
      }
    }
  }
}
</style>
