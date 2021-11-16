const express = require('express'),
	app = express();
app.listen(8090, () => {
	console.log('listen ...');
});


// 服务器端设置允许源
app.use((req, res, next) => {
	// const ACCESS_ORIGIN = '*'; // 允许源
	/* 单一源可以根据请求的域名进行动态的设置，多个系统请求也可以跨域 */
	const ACCESS_ORIGIN = 'http://127.0.0.1:5500'; // 允许单一源
	const CREDENTIALS = true; // 允许携带资源凭证
	// const HEADERS = 'Content-Type'; // 允许哪些头
	// const ALLOW_METHODS = 'get,post'; // 允许哪些方法
	res.header('Access-Control-Allow-Origin', ACCESS_ORIGIN);
	res.header('Access-Control-Allow-Credentials', CREDENTIALS);
	// res.header('Access-Control-Allow-Headers', HEADERS);
	// res.header('Access-Control-Allow-Methods', ALLOW_METHODS);
	req.method === 'OPTIONS'
		? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!')
		: next();
});


app.get('/', (req, res)=> {
  res.json({
    a:1
  })
})