export default {
  changeCity(state, city) { //changeCity 可以改变
    state.city = city
    //存储localStorage到浏览器
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
