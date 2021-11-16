function once(fn){
  let done = false;
  return function(){
    if (!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  }
}
let fn = once(() => {
  console.log('once')
})

fn();
fn();