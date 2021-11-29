// const obj = {id: 5};
// function A(_obj) {
//   return _obj.id;
// }
// A(obj);

var obj = {
  get id() {
    return Math.random(); //输入不同
  } 
}