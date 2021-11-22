const KoaRouter = require('koa-router')
const router = new KoaRouter()
const koaCompose = require('koa-compose')
const hello = require('../controller/hello')

module.exports = () => {
  router.get('/fe', hello.fe)
  router.get('/backend', hello.backend)

  return koaCompose([ router.routes(), router.allowedMethods() ])
}
