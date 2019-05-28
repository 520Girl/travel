<template>
  <div class="list">
    <div class="item" v-for="(item,index) of categoryList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="content">
        <ul class="content-right ">
          <li><strong>¥</strong><span>{{item.price}}</span></li>
          <li class="button">{{item.book}}</li>
        </ul>
      </div>
      <div class="item-chilren" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "DetailList",
  props: {
    categoryList: Array
  },

}
</script>
<style lang="scss"  scoped>
.list {
  .item-title-icon {
    position: relative;
    left: 0.06rem;
    top: 0.06rem;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
      no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }

  .item-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
  }

  .item-chilren {
    // box-sizing: border-box;
    padding: 0 0.2rem;
  }
  .content {
    .content-right {
      line-height: 0.8rem;
      display: flex;
      justify-content: flex-end;
      strong {
      }
      span {
        font-size: 0.4rem;
        font-weight: 700;
        padding-right: 0.15rem;
      }
      .button {
        height: 0.6rem;
        width: 1.5rem;
        color: #fff;
        font-size: 0.28rem;
        line-height: 0.6rem;
        text-align: center;
        border-radius: 0.08rem;
        background: #ffab1e;
      }
    }
  }
}
</style>