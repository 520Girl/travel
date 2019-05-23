import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决300毫秒click延迟
import './assets/styles/reset.css' // 初始化各种标签,以达到每个机型显示
import './assets/styles/border.css' // 一像素解决方案

Vue.config.productionTip = false
fastClick.attach(document.body); // 将这个方法绑定在网页上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
