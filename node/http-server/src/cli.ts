import { program } from 'commander';
import HttpServer, { IHttpServerOptions } from './http-server';
program
  .option('--cache, <cache>', '设置缓存时间，秒数')
  .option('--root, <root>', '静态文件目录')
  .option('-p, --port, <port>', '监听端口', '3000')
  .action((options:{ root?:string ;cache: string; port: string }) => {
    const { root, cache, port } = options;
    const server = new HttpServer({
      root,
      cache: parseInt(cache)
      // cache: cache && parseInt(cache)
    });
    server.listen(+port);
    console.log(`监听 ${port}`);
  })
program.parse(process.argv);