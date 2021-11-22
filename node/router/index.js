const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()
const PORT = 3002

router.get('/fe', (ctx) => {
  ctx.body = 'hello fe'
})

router.get('/backend', (ctx) => {
  ctx.body = 'hello backend'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
