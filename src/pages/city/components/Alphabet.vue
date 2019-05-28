<template>
  <div class="Alphabet">
    <ul>
      <li v-for="item in Alphabet" :key="item" :ref="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      handleY: 0,
      timer: null
    }
  },
  updated() {
    const handleY = this.$refs['A'][0].offsetTop;
  },
  computed: {
    Alphabet() {
      const Alphabet = []
      for (let i in this.cities) {
        Alphabet.push(i);
      }
      return Alphabet
    }
  },
  methods: {
    handleLetterClick(e) {//将值传给city 循环列表也就是list列表这是兄弟之间传值innerHTML也可以,点击会获取一个事件对象e
      this.$emit("change", e.target.innerText) //目的给list传值,通过给父组件传值再通过父传给list,  或者用this.bus的方法直接传
      //console.log(e.target.innerText)this.$emit()向外触发事件
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        } {
          this.timer = setTimeout(() => { //函数节流
            const handleMoveY = e.touches[0].clientY - 79;
            const index = Math.floor((handleMoveY - this.handleY) / 17);
            if (index >= 0 && index < this.Alphabet.length) {
              this.$emit("change", this.Alphabet[index])
            }
          }, 20)
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
.Alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //transform: translateY(50%);
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  font-size: 0.25rem;
  color: #00badc;
  ul {
    li {
      line-height: 0.35rem;
      text-align: center;
    }
  }
}
</style>
