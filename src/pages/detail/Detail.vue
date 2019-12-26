<template>
  <div>
    <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <detail-score></detail-score>
    <detail-where :saletitle="saletitle" :saleprice="saleprice"></detail-where>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>
 
<script>
import DetailBanner from "./components/Banner"
import DetailHeader from "./components/Header"
import DetailWhere from "./components/Where"
import DetailScore from "./components/score"
import DetailList from "./components/List"
import axios from 'axios'
export default {
  name: "Detail",
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: [],
      saletitle: "",
      saleprice: "",
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailWhere,
    DetailScore,
    DetailList
  },
  methods: {
    getDetailInfo() {
      axios.get('https://www.easy-mock.com/mock/5cdaefc69387176d944d7b5b/example/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        const arr = data.where
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id == this.$route.params.id) {
            this.bannerImg = arr[i].content.bannerImg //轮播图首页图片
            this.sightName = arr[i].content.sightName //轮播图上的名字
            this.gallaryImgs = arr[i].content.gallaryImgs //轮播图的图片
            this.categoryList = arr[i].content.categoryList //递归组件
            this.saleprice = arr[i].content.saleprice //去哪儿单价
            this.saletitle = arr[i].content.saletitle //去哪儿标题

          }
        }
      }

      //console.log(idNum);
      // this.sightName = data.sightName
      // this.bannerImg = data.bannerImg
      // this.gallaryImgs = data.gallaryImgs
      // this.categoryList = data.categoryList
      //console.log(data.bannerImg);

    }
  },
  mounted() {
    this.getDetailInfo()
    //console.log(this.$route.params.id)
  }

}
</script>
<style lang="scss"  scoped>
.content {
  height: 50rem;
}
</style>