export default { //改变数据,异步处理或者,批量同步数据处理,如果没有这些处理 ,就可以不结果这异步,直接this.$store.cimmit('changeCity', city)
  changeCity(ctx, city) { //第一次参数上下文,第二个就是list组件中传过来的值  //这是一个方法  ctx 是actions通过它可以吊桶commit方法给mutations传方法和值
    // console.log(ctx)
    //console.log(city)
    ctx.commit('changeCity', city)
  }
}
