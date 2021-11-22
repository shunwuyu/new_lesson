const Koa = require('koa')
const middleware = require('./middleware')
const app = new Koa()
const PORT = 3003

middleware(app)

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})

