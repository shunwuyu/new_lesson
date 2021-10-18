"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
let MYSQL_HOST = '1.117.85.224';
let MYSQL_PORT = '3306';
let MYSQL_USER = 'root';
let MYSQL_PASSWORD = '123456';
let MYSQL_DATABASE = 'blogs';
exports.connection = mysql2_1.default.createConnection({
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT, 10),
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});
//# sourceMappingURL=mysql.js.map