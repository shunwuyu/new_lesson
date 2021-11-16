Array.prototype.push2 = function (...pushEles) {
  const pushEleLength = pushEles.length
  const length = this.length

  let i = 0
  
  while (i < pushEleLength) {
    this[ length + i ] = pushEles[ i ]
    i++
  }

  return this.length
}

const animals = ['pigs', 'goats', 'sheep']
animals.push2('cows')
console.log(animals, animals.length)