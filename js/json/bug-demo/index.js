const express = require('express');
const app = express();

app.use('/',express.static('./public/'));

app.get('/card', (req, res) => {
  // console.log(req);
  // const data = decodeURIComponent(req.query)
  // console.log(data, '///');
  const data = JSON.parse(req.query.data);
  // console.log(data);
  for (let item of data) {
    console.log(item.value.trim());  // 出错了
  }
  
  res.send(111)
})
app.listen(3001, () => {
  console.log('启动了....');
})