obj={
  name: 'xujiahui',
  getName:function(){
    return this.name
  }
}
// configurable writable 区别  
// configurable 给的说明是 如果为 false , 
// 那么不可以修改, 不可以删除.
// writable 给的说明是如果设置为 false, 
// 不可以采用 数据运算符 进行赋值
Object.defineProperty(obj,"name",{
//不可枚举不可配置
  enumerable: false,
  configurable: false,
  get () {
    console.warn('不可以获得私有变量')
  }
});
console.log(obj.name, Object.keys(obj));