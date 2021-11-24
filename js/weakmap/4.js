// 说明下列方法为何不能用作 IIFE，要使其成为 IIFE，需要进行哪些更改？
// function foo(){ }函数声明， （） 尝试调用一个函数, 但没有指定名称
// function foo(){ }();
// void修饰变量值为undefined
void function foo(){ }();
// function foo(){ }();