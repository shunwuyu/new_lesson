let price = '123456789'
// let priceReg = /(?=\d{3}$)/
// let priceReg = /(?=(\d{3})+$)/g
let priceReg = /(?!^)(?=(\d{3})+$)/g
console.log(price.replace(priceReg, ','))