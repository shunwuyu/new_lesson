module.exports = {
  fe (ctx) {
    ctx.body = 'hello fe'
  },
  backend (ctx) {
    ctx.body = 'hello backend'
  }
}