<template>
  <div class="list">
    <div class="item" v-for="(item,index) of list" :key="index"></div>
  </div>
</template>
 
<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  },
  methods: {

  }, mounted() {

  }

}
</script>
<style lang="scss"  scoped>
</style>