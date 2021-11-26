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
// 无论成功还是失败 其输出的信息中的时间一定是延时时间最短的那个
// Promise.race()成功的概率是0.5，也就是成功率是50%。
(async () => {
  try {
      let result = await Promise.race([upload(0), upload(1), upload(2)]);
      console.log(result);
  } catch (err) {
      console.error(err);
  }
})();