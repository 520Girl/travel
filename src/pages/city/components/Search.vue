<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item" v-show="hasNOList">没有数据显示</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    }
  },
  computed: {
    // handleCites() {
    //   for (let i in this.cities) {
    //     for (let a = 0; a < i.length; a++) {
    //       console.log(i[a])
    //     }
    //   }
    // }
    hasNOList() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      } {
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
                //console.log(result)
              }
            });
          }
          this.list = result
        }, 100)
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="scss" scoped>
@import "~styles/varibles.scss";
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    width: 100%;
    text-align: center;
    height: 0.62rem;
    line-height: 0.62rem;
    border-radius: 0.06rem;
    color: #666666;
    padding: 0 0.1rem;
    font-size: 0.14rem;
    box-sizing: border-box;
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eeeeee;
    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      background: #ffffff;
      color: #666666;
    }
  }
}
</style>
