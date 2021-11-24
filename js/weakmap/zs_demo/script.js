function log(target, name, descriptor) {
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

@log // 装饰类的装饰器
class Car {
  run() {
    console.log('Car is running')
  }
}

const c1 = new Car()
c1.run()
