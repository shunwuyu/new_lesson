// console.log(JSON.stringify({
//   name: '前端胖头鱼',
//   sex: 'boy',
//   // 函数会被忽略
//   showName () {
//     console.log('前端胖头鱼')
//   },
//   // undefined会被忽略
//   age: undefined,
//   // Symbol会被忽略
//   symbolName: Symbol('前端胖头鱼')
// }))


console.log(JSON.stringify([
  '前端胖头鱼',
  'boy',
  // 函数会被转化为null
  function showName () {
    console.log('前端胖头鱼')
  },
  //undefined会被转化为null
  undefined,
  //Symbol会被转化为null
  Symbol('前端胖头鱼')
]))

// 3.单独转换会返回undefined
console.log(JSON.stringify(
  function showName () {
    console.log('前端胖头鱼')
  }
)) // undefined
console.log(JSON.stringify(undefined)) // undefined
console.log(JSON.stringify(Symbol('前端胖头鱼'))) // undefined
