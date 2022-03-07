const deepClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? []: {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
          cloneTarget[prop] = deepClone(target[prop]); // 解决了深的问题
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

let obj = {val : 100};
obj.target = obj;

deepClone(obj); // Maximum call stack size exceeded