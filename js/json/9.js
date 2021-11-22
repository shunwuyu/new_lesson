const isCyclic = (obj) => {
  // 使用Set数据类型来存储已经检测过的对象
  let stackSet = new Set()
  let detected = false

  const detect = (obj) => {
    // 不是对象类型的话，可以直接跳过
    if (obj && typeof obj != 'object') {
      return
    }
    // 当要检查的对象已经存在于stackSet中时，表示存在循环引用
    if (stackSet.has(obj)) {
      return detected = true
    }
    // 将当前obj存如stackSet
    stackSet.add(obj)

    for (let key in obj) {
      // 对obj下的属性进行挨个检测
      if (obj.hasOwnProperty(key)) {
        detect(obj[key])
      }
    }
    // 平级检测完成之后，将当前对象删除，防止误判
    /*
      例如：对象的属性指向同一引用，如果不删除的话，会被认为是循环引用
      let tempObj = {
        name: '前端胖头鱼'
      }
      let obj4 = {
        obj1: tempObj,
        obj2: tempObj
      }
    */
    stackSet.delete(obj)
  }

  detect(obj)

  return detected
}

let cyclicObj = {
  name: '前端胖头鱼',
}
cyclicObj.obj = cyclicObj
console.log(isCyclic(cyclicObj));