// 拷贝函数
function doIt(a, b, c) {
  let x = 2;
  return [a, b, c];
}

const handleFunc = (func) => {
  // 箭头函数直接返回自身
  // console.log(func.prototype);
  if(!func.prototype) return func;
  // <br/><a target=_blank href="www.baidu.com">百度一下</a>百度才知道
  // ?<= 以什么为开始    m 多行
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  console.log(funcString, '||||');
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString);
  console.log(param);
  const body = bodyReg.exec(funcString);
  console.log(body)
  if(!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

handleFunc(doIt);

