const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const deepClone = (target, map = new Map()) => { 
  if(map.get(target))  
    return target; 
 
  if (isObject(target)) { 
    map.set(target, true);   // 看懂了吗？
    // console.log(map, '??????');
    const cloneTarget = Array.isArray(target) ? []: {}; 
    for (let prop in target) { 
      if (target.hasOwnProperty(prop)) { 
          cloneTarget[prop] = deepClone(target[prop],map); 
      } 
    } 
    return cloneTarget; 
  } else { 
    return target; 
  } 
}

const a = {val:2};
a.target = a;
let newA = deepClone(a);
console.log(newA)
