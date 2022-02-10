interface StackObj {
  [propName: number] : any;
}

export default class ObjectStack {
  private items: StackObj;
  private count: number;
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }
  pop() {
    if(this.isEmpty()){
        return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    // console.log(this.items);
    return result;
  }
  peek() {
    if(this.isEmpty()){
        return undefined;
    }
    return this.items[this.count - 1];
  }
  // 判断栈是否为空
isEmpty() {
  return this.count === 0;
 }
// 清空栈内元素
clear() {
  this.items = [];
  this.count = 0;
}
// 获取栈内元素数量
size():number{
  return this.count;
}
toString(){
  if (this.isEmpty()){
      return "";
  }
  let objString = `${this.items[0]}`;
  for (let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`
  }
  return objString;
}
}