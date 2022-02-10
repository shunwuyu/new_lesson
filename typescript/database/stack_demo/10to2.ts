import Stack from './stack'
import ObjectStack from './obj_stack'

const decimalToBinaryStack = function (decNumber: number) {
  console.time();
  let number = decNumber;
  // 余数
  let rem;
  // 二进制结果
  let binaryString = "";
  // let stack = new Stack()
  let stack = new ObjectStack()

  while (number > 0) {
    // 模运算
    rem = Math.floor(number % 2);
    // 将余数入栈
    stack.push(rem);
    // 当前十进制结果除以二
    number = Math.floor(number / 2);
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }
  console.timeEnd();
  return binaryString;
}

console.log(decimalToBinaryStack(41983929029299292211111111))