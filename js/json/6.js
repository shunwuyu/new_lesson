const d = new Date()

console.log(d.toJSON()) // 2021-10-05T14:01:23.932Z
console.log(JSON.stringify(d)) // "2021-10-05T14:01:23.932Z"

let cyclicObj = {
  name: '前端胖头鱼',
}

cyclicObj.obj = cyclicObj

console.log(JSON.stringify(cyclicObj))