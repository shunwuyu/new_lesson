const a = {val:2};
a.target = a;
const b = JSON.parse(JSON.stringify(a));
console.log(b);