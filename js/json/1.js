// 1. 转换对象
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy' })) 

// 2. 转换普通值
console.log(JSON.stringify('前端胖头鱼'))
console.log(JSON.stringify(1)) // "1"
console.log(JSON.stringify(true)) // "true"
console.log(JSON.stringify(null)) // "null"
// Do not know how to serialize a BigInt
// console.log(JSON.stringify(9007199254740991n)) ;

// 3. 指定replacer函数
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, (key, value) => {
  return typeof value === 'number' ? undefined : value
}))

// 4. 指定数组
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, [ 'name' ]))
console.log(JSON.stringify({ name: '前端胖头鱼', sex: 'boy', age: 100 }, null , 20))