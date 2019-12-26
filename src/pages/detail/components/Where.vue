<template>
  <div class="where">
    <div class="where-bottom">
      <div class="bottom-title border-bottom">
        <span class="iconfont icon-wanxia-"></span>
        <span>去哪儿推荐</span>
      </div>
      <div class="bottom-content border-bottom">
        <ul class="content-left">
          <li>
            <h5 class="iconfont icon-tourism left-title ">{{this.saletitle}}</h5>
            <p class="left-condition">23:59之前可预订到明日</p>
            <p class="left-info">
              <span class="iconfont icon-caigouziying"></span>
              <span class="border">自营</span>
              <span class="iconfont icon-yichangtiaojianshezhi"></span>
              <span class="border">无需条件</span>
              <span class="iconfont icon-tuikuan"></span>
              <span class="border">条件退</span>
            </p>
          </li>
        </ul>
        <ul class="content-right ">
          <li><strong>¥</strong><span>500</span></li>
          <li class="button">全票预订</li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>

export default {
  name: "DetailWhere",
  props: {
    saleprice: String,
    saletitle: String
  },
  components: {

  }

}
</script>
<style lang="scss"  scoped>
.border {
  &::after {
    color: #a5e4ec;
  }
  &::before {
    color: #a5e4ec;
  }
}
.where-bottom {
  width: 100%;
  color: #212122;

  background: #f5f5f5;
  .bottom-title {
    background: #fff;
    span:first-child {
      padding: 0 0.1rem;
      font-size: 0.4rem;
      color: red;
    }
    span:last-child {
      font-size: 0.32rem;
      height: 0.88rem;
      line-height: 0.88rem;
    }
  }
  .bottom-content {
    background: #fff;
    display: flex;
    color: #212121;
    flex-direction: row;
    padding-left: 0.2rem;
    padding-bottom: 0.3rem;
    .content-left {
      line-height: 0.52rem;
      .left-title {
        font-size: 0.3rem;
      }
      .left-condition {
        font-size: 0.24rem;
        line-height: 0.3rem;
      }
      .left-info {
        font-size: 0.24rem;
        color: #a5e4ec;
        border-color: #a5e4ec;
        border-radius: 0.08rem;
        line-height: 0.3rem;
        span:nth-of-type(2n) {
        }
        .iconfont {
          font-size: 0.1rem;
          padding-right: 0.05rem;
        }
      }
    }
    .content-right {
      position: relative;
      flex: 1;
      text-align: center;
      color: #ffab1e;
      strong {
        font-size: 0.28rem;
        padding-left: 0.4rem;
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
        border-radius: 0.08rem;
        transform: translate(50%);
        left: 0.2rem;
        position: absolute;
        background: #ffab1e;
      }
    }
  }
}
</style>