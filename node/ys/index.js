const Koa = require('koa');// koa框架
const Router = require('koa-router');// 接口必备
// const cors = require('koa2-cors'); // 跨域必备
const tinify = require('tinify'); // 图片压缩
const serve = require('koa-static'); // 引入静态文件处理
const fs = require('fs'); // 文件系统
const koaBody = require('koa-body'); //文件保存库
const path = require('path');

let app = new Koa();
let router = new Router();

tinify.key = 'WmG89ZPmyvvWFmtNW9L3CC6JcTpP7tTL';
//跨域

var new1 = ''; // 原地址
var new2 = ''; // 新地址

// app.use(cors({
//   origin: function (ctx) {
//       return ctx.header.origin;
//   },
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//   maxAge: 5,
//   credentials: true,
//   withCredentials: true,
//   allowMethods: ['GET', 'POST', 'DELETE'],
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }));

const home = serve(path.join(__dirname) + '/public/');
app.use(home);

app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
  }
}));

router.post('/uploadPic', async (ctx, next) => {
  const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 修改文件的名称
  var myDate = new Date();
  var newFilename = myDate.getTime() + '.' + file.name.split('.')[1];
  console.log(newFilename);
  var   = path.join(__dirname, './public/images/') + `${newFilename}`;
  //创建可写流
  const upStream = fs.createWriteStream(targetPath);
  new1 = targetPath;
  new2 = newFilename;
  console.log(new1, new2, '/////');
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  //返回保存的路径
  console.log(newFilename)
  ctx.body ="上传成功"
});

router.get('/zipimg', async (ctx, next) => {
  console.log(new1);
   let sourse = tinify.fromFile(new1); //输入文件
   sourse.toFile(new1); //输出文件
   // 删除指定文件
   setTimeout(() => {
       fs.unlinkSync(new1);
   }, 20000);
   // 删除文件夹下的文件
    setTimeout(() => {
        deleteFolder('./public/images/')
    }, 3600000);
    
  let results = await change(new1);
  ctx.body = results
});

const change = function (sql) {
  return new Promise((resolve) => {
           fs.watchFile(sql, (cur, prv) => {
               if (sql) {
                   // console.log(`cur.mtime>>${cur.mtime.toLocaleString()}`)
                   // console.log(`prv.mtime>>${prv.mtime.toLocaleString()}`)
                   // 根据修改时间判断做下区分，以分辨是否更改
                   if (cur.mtime != prv.mtime) {
                       console.log(sql + '发生更新')
                       resolve(new2)
                   }
               }
           })
  })
}

function deleteFolder(path) {
  var files = [];
  if (fs.existsSync(path)) {
      if (fs.statSync(path).isDirectory()) {
          files = fs.readdirSync(path);
          files.forEach(function (file, index) {
              var curPath = path + "/" + file;
              if (fs.statSync(curPath).isDirectory()) {
                  deleteFolder(curPath);
              } else {
                  fs.unlinkSync(curPath);
              }
          }); 
      } 
  }
}

app.use(router.routes()).use(router.allowedMethods());
app.listen(6300)
console.log('服务器运行中')