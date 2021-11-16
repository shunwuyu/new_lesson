import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import Content from './components/content.js';
import style from "./assets/styles/global.scss";
const icon1 = require("./assets/icons/mac-os.png");
const icon2 = require("./assets/icons/apple-tv.png");
const iconSvg1 = require("./assets/icons/arrow-up.svg");
const iconSvg2 = require("./assets/icons/arrow-down.svg");
const dog = require('./assets/images/dog.jpg');
const face = require('./assets/images/face.jpg');
const hospital = require('./assets/images/hospital.png');
const font = require("./assets/fonts/iconfont.ttf");
const global = require("./assets/styles/global.scss");
console.log("scss: ", global);
import "./assets/styles/global.scss";

const reset = require("./assets/styles/reset.css");
console.log("css: ", reset);

import "./assets/styles/reset.css";
import createImg from "./assets/js/createImg.js";

// console.log(dog, '--------------------');
const dom = document.getElementById('root');
new Header(dom);
new Sidebar(dom);
new Content(dom);

const img = new Image();
img.src = iconSvg2; // 图片模块 dog1 作为 img 变量的 src 属性值
img.width = 200;
img.classList.add(style.avatar);
dom.append(img)

createImg(dom);

dom.innerHTML += '<p class="iconfont icon-mianxingshezhi">This a text.</p>'

consele.log(123)

