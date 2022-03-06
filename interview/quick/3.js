const utils = {
  randomNum() {
    return Math.floor(Math.random() * 100)
  },
  randomArray() {
    return Array.from(Array(this.randomNum()), _ => this.randomNum())
  }
}

function quickSort(array) {
  if (array.length < 2) return array
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length -1)
  let right = array.filter(v => v > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

let array = utils.randomArray()
console.log(quickSort(array))