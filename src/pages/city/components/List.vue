<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="site">
        <div class="title border-topbottom">你的位置</div>
        <div class="list-button">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="hotcity ">
        <div class="title border-topbottom">热门城市</div>
        <div class="list-button">
          <div class="button-wrapper " v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="tag">
        <div v-for="(item,key ) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <ul class="item">
              <li class="border-bottom" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        //console.log(element)
        this.scroll.scrollToElement(element)//这是better-scroll 内置的方法 ,传入的是斗米元素
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~styles/varibles.scss";
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
  //深究
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  color: #212121;
  overflow: hidden;
  .title {
    line-height: 0.4rem;
    padding: 0.1rem 0 0.1rem 0.2rem;
    box-sizing: border-box;
    background: #eeeeee;
    color: #212121;
    font-size: 0.26rem;
    font-weight: 700;
  }
  .list-button {
    //这里使用了bfc
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.3%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    overflow: hidden;
    .item {
      li {
        line-height: 0.4rem;
        padding: 0.2rem;
      }
    }
  }
}
</style>
