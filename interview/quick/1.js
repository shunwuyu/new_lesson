let pivot = array[array.length - 1]
let left = array.filter((v, i) => v <= pivot && i != array.length -1)
let right = array.filter(v => v > pivot)

