Array.prototype.unshift2 = function (...unshiftEles) {
  // 借助扩展符，将需要添加的元素以块的形式插入到数组前面
  let newArray = [ ...unshiftEles, ...this ]
  let length = newArray.length
  
  let i = 0

  if (unshiftEles.length === 0) {
    return length
  }
  // 重新复制给数组
  while (i < length) {
    this[ i ] = newArray[ i ]
    i++
  }
  
  return this.length
}

let arr = [4,5,6]
// 一次性插入
arr.unshift2(1,2,3)

console.log(arr)