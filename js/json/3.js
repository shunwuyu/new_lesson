// console.log(JSON.stringify([new Number(1), new String("前端胖头鱼"), new Boolean(false)]))

console.log(JSON.stringify({
  [Symbol('前端胖头鱼')]: '前端胖头鱼'}
)) 
// '{}'
console.log(JSON.stringify({
  [ Symbol('前端胖头鱼') ]: '前端胖头鱼',
}, (key, value) => {
  if (typeof key === 'symbol') {
    return value
  }
}))
