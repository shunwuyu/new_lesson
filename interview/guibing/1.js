let left = [2, 4, 6], i = 0
let right = [1, 3, 5], j = 0
let result = []
while(i < left.length && j < right.length) {
  if (left[i] < right[j]) {
    result.push(left[i])
    i++
  } else {
    result.push(right[j])
    j++
  }
}
console.log(result)
if (i < left.length) {
  result.push(...left.slice(i))
}
if (j < right.length){
  result.push(...right.slice(j))
}
console.log(result)