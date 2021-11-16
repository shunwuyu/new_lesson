function fn(...args) {
  // console.log(Object.prototype.toString.call(args));
  // console.log(Object.prototype.toString.call(Array.from(arguments)))
  console.log(Object.prototype.toString.call(Array.prototype.slice.apply(arguments)))
}

fn(1, 2,3)