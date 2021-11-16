function Father(){
  // 其一, 保证了原型链中引用类型值的独立,不再被所有实例共享;
  this.colors = ["red","blue","green"];
  // 方法都在构造函数中定义  this.sayHello = function() {}
}
function Son(){
	Father.call(this);//继承了Father,且向父类型传递参数
}
var instance1 = new Son();
// 其二, 子类型创建时也能够向父类型传递参数.
instance1.colors.push("black");
console.log(instance1.colors);//"red,blue,green,black"

var instance2 = new Son();
// 如果不用构造函数， 那么就引用式的了
console.log(instance2.colors);//"red,blue,green" 可见引用类型值是独立的
