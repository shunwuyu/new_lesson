const utils = {
  randomNum() {
    return Math.floor(Math.random() * 100)
  },
  randomArray() {
    return Array.from(Array(this.randomNum()), _ => this.randomNum())
  }
}
function merge(left, right) {
  let result = []
  let i = 0, j = 0
  while(i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }
  if (i < left.length) {
    result.push(...left.slice(i))
  } else {
    result.push(...right.slice(j))
  }
  return result
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let m = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0, m))
  let right = mergeSort(array.slice(m))
  return merge(left, right)
}
let array = utils.randomArray()
console.log(mergeSort(array))