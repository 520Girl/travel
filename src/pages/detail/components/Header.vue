<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs " v-show="showAbs">
      <span class="iconfont icon-zuojiantou abs-icon"></span>
    </router-link>
    <div class="header-flxed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont icon-zuojiantou flxed-icon"></span>
      </router-link>
      <span>景点详情</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const topHeight = document.documentElement.scrollTop;
      if (topHeight > 60) {
        let opacity = topHeight / 140
        if (opacity <= 1) {
          this.opacityStyle = {
            opacity: opacity
          }
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated() { //因为我们使用了keep-alive 才有的
    window.addEventListener('scroll', this.handleScroll) //这是一个全局的window对象 全部主键有效果
  },
  deactivated() { //解绑 网页离开时时
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss"  scoped>
@import "~styles/varibles.scss";
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  z-index: 2;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  .abs-icon {
    color: #ffffff;
    font-size: 0.4rem;
  }
}
.header-flxed {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;
  .flxed-icon {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.5rem;
    color: #ffffff;
  }
}
</style>