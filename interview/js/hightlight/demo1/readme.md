[source](https://juejin.cn/post/6919091554657255431)

- 如何高亮大帝
- 有什么问题？
  处理的字符串是一个HTML的字符串怎么办
  HTML字符串与普通字符串的区别无非就是里面多了一些特殊的字符，比如<、>、?、/
  所以当我们做正则匹配的时候，就需要把这样的情况排除在外，如何排除呢

- hello world llo 如何匹配？ 
  两个正则表达式 (?<=pattern)  (?=pattern)
  (?<=pattern)   Positive lookbehind
  \b 单词开头结尾
  hello word，我们用(?<=\bhe)\w+去匹配，匹配出的结果为llo

- (?=pattern)名为：Positive lookahead
  \w+(?=llo)去匹配，匹配出的结果为he