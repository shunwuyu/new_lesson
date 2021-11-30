// set 1rem = viewWidth / 10
// 有什么问题，  页面改变时
function setRemUnit () {
  var rem = docEl.clientWidth / 10
  docEl.style.fontSize = rem + 'px'
}
setRemUnit();