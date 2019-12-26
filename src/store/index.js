import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex) //使用插件vue使用插件通过use方法


export default new Vuex.Store({ //创建一个仓库
  state,
  actions,
  mutations,
  getters: { //类似于计算机属性
    doubleCity() {
      return state.city // + ' ' + state.city
    }
  }
})
