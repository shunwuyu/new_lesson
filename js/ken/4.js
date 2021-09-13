// 查找字符串中出现最多的字符和个数
// const phoneReg = /(1[3456789][0-9])[0-9]{8}/;
// const result = phoneReg.exec('ddfdfa13979787654dd');
// console.log(result.$1);



let str = "abcabcabcbbccccc";
let num = 0;
let char = '';
// 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"
// 返向引用
let re = /(\w)\1+/g;

str.replace(re,($0,$1) => {
  console.log($0, $1, '+++++');
  if(num < $0.length){
      num = $0.length;
      char = $1;        
  }
});
console.log(str, '////')

console.log(`字符最多的是${char}，出现了${num}次`);