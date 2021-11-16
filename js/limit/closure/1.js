function makeFun() {
  const msg = "Hello function";
  return function () {
    console.log(msg)
  }
}
const fn = makeFun()
fn()