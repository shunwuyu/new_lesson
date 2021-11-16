let c = [1, 2, 3]
let d = {a:2}
Object.prototype.toString = function(){
    console.log('Object')
}
Array.prototype.toString = function(){
    console.log('Array')
    return this.join(',')   // 返回toString的默认值（下面测试）
}
console.log(2 + 1)  // 3
console.log('s')    // 's'
console.log('s'+2)  // 's2'
console.log(c < 2)  // false        (一次 => 'Array')
console.log(c + c)  // "1,2,31,2,3" (两次 => 'Array')
console.log(d > d)  // false        (两次 => 'Object')
