https://juejin.cn/post/6844903510761275400#heading-34

- 不仅能看懂别人的正则，还要自己会写正则
  1.js 读
- [123456abcdefGHIJKLM]  [1-6a-fG-M]
- a -  z  这三者中任意一个字符，该怎么做呢
  [-az]或[az-]或[a\-z]   不能是 [a-z]
- 这些简写的意思
  \d 一位数字
  \D 数字外的任意字符
  \w就是[0-9a-zA-Z_]
  \W是[^0-9a-zA-Z_]
  \s是[ \t\v\n\r\f]。表示空白符
  \S是[^ \t\v\n\r\f]  非空白符。
  .就是[^\n\r\u2028\u2029]。通配符，

  匹配任意字符怎么办 [\d\D]、[\w\W]、[\s\S]和[^]  ?

- var string = "123 1234 12345 123456";
  var regex = /\d{2,5}/g; 贪婪匹配
  var regex = /\d{2,5}?/g; 惰性匹配
  区别是什么
  量词后面加个问号，问一问你知足了吗，你很贪婪吗？

- 
  "#ffbbad #Fc01DF #FFF #ffE"; 把所有颜色值匹配出来？
  匹配颜色值
  1. 表示一个16进制字符 字符组 [0-9a-fA-F]
  2. 字符可以出现3或6次，需要是用量词和分支结构
  3. 分支结构时，需要注意顺序。

- 正则是什么？ 
正则是匹配模式，要么匹配字符，要么匹配位置。
  - 元字符
    - 两种模糊匹配
      精确匹配是没多大意义
      var regex = /hello/;
      console.log( regex.test("hello") ); // true
    - 横向模糊和纵向模糊
      横向  {m, n}
      /ab{2,5}c/g 请写出些正则    修饰符 g   所有      
      var regex = /ab{2,5}c/g;
      var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
      console.log( string.match(regex) ); 
      // => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

      纵向 字符组
      var regex = /a[123]b/g;
      var string = "a0b a1b a2b a3b a4b";
      console.log( string.match(regex) ); 
      // => ["a1b", "a2b", "a3b"]
    - 字符组
      虽叫字符组（字符类），但只是其中一个字符。例如[abc]，表示匹配一个字符，它可以是“a”、“b”、“c”之一。
      [123456abcdefGHIJKLM]   [1-6a-fG-M]
    -  排除字符组
      [^abc] 排除字符组（反义字符组）的概念

    - 简写形式
    
    - 量词{m,n}
      {m,} 表示至少出现m次。
      {m} 等价于{m,m}，表示出现m次。
    - 贪婪匹配，2.js  尽可能多的匹配 
      惰性匹配 尽可能少的匹配
      量词后面加个问号，问一问你知足了吗，你很贪婪吗？
    - 多选分支
      ```js
      var regex = /good|nice/g;
      var string = "good idea, nice try.";
      console.log( string.match(regex) ); 
      ```





- 括号的作用是什么？
  捕获数据， 要么在API中进行分组引用，要么在正则里进行反向引用？
- 回溯法原理
- 
- 学习正则，是为了在真实世界里应用的。