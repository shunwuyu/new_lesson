var countList = [1, 2, 3, 4, 5];
// 纯的
countList.slice(0, 3);
console.log(countList);
// 不纯的
countList.splice(0, 3);
console.log(countList, '/////');