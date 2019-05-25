//解决用户关闭本地存储或 隐身模式,代码出错而导致的无法运行,加入try catch解决
let defaultCity = '天津'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}


export default { //存放公用数据
  city: defaultCity
}
