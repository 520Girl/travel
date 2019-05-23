import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决300毫秒click延迟
import 'styles/reset.css' // 初始化各种标签,以达到每个机型显示
import 'styles/border.css' // 一像素解决方案
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body); // 将这个方法绑,正确的使用fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
