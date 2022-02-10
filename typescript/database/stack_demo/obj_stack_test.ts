import ObjectStack from './obj_stack'

const stack = new ObjectStack();

stack.push("第一条数据");
stack.push("第二条数据");
// 出栈
stack.pop();
// 返回栈顶元素
console.log(stack.peek());
// 查看栈大小
console.log(stack.size());
// 判断栈是否为空
console.log(stack.isEmpty());
// 返回栈内所有元素
console.log(stack.toString())
// 清空栈
stack.clear()