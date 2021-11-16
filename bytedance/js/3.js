console.log(Array.isArray([]));
console.log(Object.prototype.toString.call([]) == '[object Array]');
console.log([] instanceof Array)
// let arr = []
console.log([].__proto__ == Array.prototype)
console.log([].constructor == Array)