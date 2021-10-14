import mysql from 'mysql2';

let MYSQL_HOST = '1.117.85.224';
let MYSQL_PORT = '3306';
let MYSQL_USER = 'root';
let MYSQL_PASSWORD = '123456';
let MYSQL_DATABASE = 'blogs';


/**
 * 创建数据服务连接
 */
export const connection = mysql.createConnection({
  host: MYSQL_HOST,
  port: parseInt(MYSQL_PORT, 10),
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
})