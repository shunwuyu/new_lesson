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
// 成功的返回值是第一个执行成功的Promise的返回值。
(async () => {
  try {
      let result = await Promise.any([upload(0), upload(1), upload(2)]);
      console.log(result);
  } catch (err) {
      console.error(err);
  }
})();