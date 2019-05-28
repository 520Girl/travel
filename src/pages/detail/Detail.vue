<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-score></detail-score>
    <detail-where></detail-where>
    <div class="content"></div>
  </div>
</template>
 
<script>
import DetailBanner from "./components/Banner"
import DetailHeader from "./components/Header"
import DetailWhere from "./components/Where"
import DetailScore from "./components/score"
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailWhere,
    DetailScore
  }

}
</script>
<style lang="scss"  scoped>
.content {
  height: 50rem;
}
</style>