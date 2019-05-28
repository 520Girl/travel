<template>
  <div class="where">
    <div class="where-bottom">
      <div class="bottom-title border-bottom">
        <span class="iconfont icon-xiajiantou">111</span>
        <span>去哪儿推荐</span>
      </div>
      <div class="bottom-content border-bottom">
        <ul class="content-left">
          <li>
            <h5 class="iconfont icon-xiajiantou left-title ">【直销】东部华侨城大侠谷成人票</h5>
            <p class="left-condition">23:59之前可预订到明日</p>
            <p class="left-info">
              <span>自营</span>
              <span>无需条件</span>
              <span>条件退</span>
            </p>
          </li>
        </ul>
        <ul class="content-right ">
          <li><strong>¥</strong><span>180</span></li>
          <li class="button">预订</li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>

export default {
  name: "DetailWhere",
  components: {

  }

}
</script>
<style lang="scss"  scoped>
.where-bottom {
  width: 100%;
  color: #212122;

  background: #f5f5f5;
  .bottom-title {
    background: #fff;
    span:first-child {
      padding-right: 0.4rem;
      font-size: 0.32rem;
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
        span {
          padding-right: 0.1rem;
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
        font-size: 0.44rem;
        font-weight: 700;
      }
      .button {
        height: 0.6rem;
        width: 1.5rem;
        color: #fff;
        font-size: 0.28rem;
        line-height: 0.6rem;
        border-radius: 0.08rem;
        position: absolute;
        transform: translateX(50%);
        background: #ffab1e;
      }
    }
  }
}
</style>