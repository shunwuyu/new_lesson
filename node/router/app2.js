const http = require('http')
const url = require('url')
const PORT = 3000

http.createServer((req, res) => {
  //  如何拿到路径？
  let { pathname } = url.parse(req.url)
  let str = 'hello'

  if (pathname === '/fe') {
    str += ' fe'
  } else if (pathname === '/backend') {
    str += ' backend'
  }

  res.end(str)
}).listen(PORT, () => {
  console.log(`app start at: ${PORT}`)
})
