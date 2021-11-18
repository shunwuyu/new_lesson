const getType = (s) => {
  return Object.prototype.toString.call(s).replace(/\[object (.*?)\]/, '$1').toLowerCase()
}

console.log(getType(null));
console.log(getType("111"));