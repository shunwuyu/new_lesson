"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let APP_PORT = 3001;
app_1.default.listen(APP_PORT, () => {
    console.log('🚀 服务已启动！');
});
//# sourceMappingURL=main.js.map