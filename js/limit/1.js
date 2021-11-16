class Limit {
  constructor (n) {
    this.limit = n
    this.count = 0
    this.queue = []
  }
  enqueue (fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject })
    })
  }s
  dequeue () {
    if (this.count < this.limit && this.queue.length) {
      // 等到 Promise 计数器小于阈值时，则出队执行
      const { fn, resolve, reject } = this.queue.shift()
      this.run(fn).then(resolve).catch(reject)
    }
  }
  async run (fn) {
    this.count++
    // 维护一个计数器
    const value = await fn()
    this.count--
    // 执行完，看看队列有东西没
    this.dequeue()
    return value
  }

  build (fn) {
    if (this.count < this.limit) {
      // 如果没有到达阈值，直接执行
      return this.run(fn)
    } else {
      // 如果超出阈值，则先扔到队列中，等待有空闲时执行
      return this.enqueue(fn)
    }
  }
}
// concurrency  并发数
Promise.map = function (list, fn, { concurrency }) {
  const limit = new Limit(concurrency)
  // console.log(list, '???');
  return Promise.all(list.map((item) => {
    // console.log(...args, '/////');
    // console.log(item, '|||')
    return limit.build(() => fn(item))
  }))
}

Promise.map([
  'a.txt',
  'b.txt',
  'c.txt',
  'd.txt',
  'e.txt',
  'f.txt',
  'g.txt',
  'h.txt',
  'i.txt',
  'j.txt',
  'k.txt',
  'l.txt',
  'm.txt',
  'n.txt',
  'o.txt',
  'p.txt'
], (name) => {
  return new Promise((resolve) => {
    console.log(name, '++++++++++++=');
    setTimeout(() => {
      resolve(name);
    }, 1000)
  })
}, {
  concurrency:3
})