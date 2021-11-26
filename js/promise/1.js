const upload = function (blob) {
  let time = Math.round(100 + 500 * Math.random());
  return new Promise((resolve, reject) => {
      // 是否执行测试
      console.log(`run ${time}ms`);
      // 成功失败概率50%
      if (Math.random() > 0.5) {
          setTimeout(resolve, time, 'promise resolved ' + time + 'ms');
      } else {
          setTimeout(reject, time, 'promise rejected ' + time + 'ms');
      }         
  });
};
// Promise.all()成功的概率是0.5 * 0.5 * 0.5 = 0.125，也就是成功率是12.5%。
// 3个upload方法都resolve通过才会认为成功    resolve 结果的数组， 
// 否则返回第一个出错的提示结构
(async () => {
  try {
      let result = await Promise.all([upload(0), upload(1), upload(2)]);
      console.log(result);
  } catch (err) {
    // 第一个出错的提示结构
      console.error(err);
  }
})();