// 首先引入对应的方法来创建虚拟DOM
import { createElement, render, renderDom } from './element';
import diff from './diff';
import patch from './patch';

let virtualDom = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['周杰伦']),
  createElement('li', {class: 'item'}, ['林俊杰']),
  createElement('li', {class: 'item'}, ['王力宏'])
]);

// console.log(virtualDom);
let el = render(virtualDom);// 渲染虚拟DOM得到真实的DOM结构
// console.log(el); 
// 直接将DOM添加到页面内
renderDom(el, document.getElementById('root'));

// 创建另一个新的虚拟DOM
let virtualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item active'}, ['七里香']),
  createElement('li', {class: 'item'}, ['一千年以后']),
  createElement('li', {class: 'item'}, ['需要人陪'])    
]);

let patches = diff(virtualDom, virtualDom2);
console.log(patches);
// 将变化打补丁，更新到el
patch(el, patches);