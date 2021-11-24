var _class;

function log(target, name, descriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

let Car = log(_class = class Car {
  run() {
    console.log('Car is running');
  }

}) || _class;

const c1 = new Car();
c1.run();
