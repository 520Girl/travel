<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="site">
        <div class="title border-topbottom">你的位置</div>
        <div class="list-button">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="hotcity ">
        <div class="title border-topbottom">热门城市</div>
        <div class="list-button">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="tag  ">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul class="item">
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
          </ul>
        </div>

        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul class="item">
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
          </ul>
        </div>

        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul class="item">
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
            <li class="border-bottom">阿拉斯加</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
    color: #6666;
    font-size: 0.26rem;
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
