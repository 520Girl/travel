<template>
  <div class="score">
    <div class="banner-bottom">
      <div class="bottom-evaluate">
        <div class="evaluate-left border-rightbottom">
          <div>
            <p><span>4.9<sub>分</sub></span>很棒</p>
            <p><span>7865条评论</span><span>3条攻略</span></p>
          </div>
          <div>
            <span class=" iconfont icon-zuojiantou1"></span>
          </div>
        </div>
        <div class="evaluate-right border-bottom">
          <div>
            <p><span>景点介绍</span></p>
            <p><span>开发时间</span><span>贴士</span></p>
          </div>
          <div>
            <span class=" iconfont icon-zuojiantou1"></span>
          </div>
        </div>
      </div>
      <div class="bottom-address">
        <span class=" icon-left iconfont icon-tubiaozhizuomoban"></span>
        <span class="address">广东省深圳市盐田区大梅沙东部华侨城</span>
        <span class=" icon-right iconfont icon-zuojiantou1"></span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "DetailScore"

}
</script>
<style lang="scss"  scoped>
.banner-bottom {
  padding: 0.1rem 0.2rem 0 0.2rem;
  color: #000000;
  position: relative;
  top: -0.2rem;
  z-index: 2;
  border-radius: 0.1rem 0.1rem 0 0;
  background: #ffffff;
  .bottom-evaluate {
    width: 100%;
    box-sizing: border-box;
    padding: 0.2em 0 0.3rem 0;
    display: flex;
    .evaluate-left {
      width: 50%;
      flex: 1;
      display: flex;
      justify-content: space-between;
      p:first-child {
        color: #ff8300;
        font-size: 0.28rem;
        span {
          font-size: 0.44rem;
          padding-right: 0.3rem;
          sub {
            font-size: 0.28rem;
            vertical-align: middle;
          }
        }
      }
      p:last-child {
        color: #9e9e9e;
        font-size: 0.24rem;
        margin-top: 0.1rem;
        margin-bottom: 0.23rem;
        span:last-child {
          padding-right: 0.2rem;
        }
      }
      div:last-child {
        span {
          font-size: 0.28rem;
          padding-right: 0.4rem;
          height: 0.73rem;
          line-height: 0.73rem;
        }
      }
    }
    .evaluate-right {
      width: 50%;
      padding-left: 0.2rem;
      box-sizing: border-box;
      flex: 1;
      display: flex;
      justify-content: space-between;
      p:first-child {
        color: #ff8300;
        font-size: 0.28rem;
        span {
          color: #000000;
          padding-right: 0.3rem;
          sub {
            font-size: 0.28rem;
            vertical-align: middle;
          }
        }
      }
      p:last-child {
        color: #9e9e9e;
        font-size: 0.24rem;
        margin-top: 0.1rem;
        margin-bottom: 0.23rem;
        span:last-child {
          padding-right: 0.2rem;
        }
      }
      div:last-child {
        span {
          font-size: 0.28rem;
          padding-right: 0.4rem;
          height: 0.73rem;
          line-height: 0.73rem;
        }
      }
    }
  }
  .bottom-address {
    width: 100%;

    .icon-left {
      font-size: 0.5rem;
    }
    .address {
      color: #212121;
      font-size: 0.28rem;
    }
    .icon-right {
      font-size: 0.44rem;
      float: right;
    }
  }
}
</style>