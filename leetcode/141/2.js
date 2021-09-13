
var hasCycle = function (head) {
  if (!head)
      return false;
  let flag = true;
  let top = head;
  let btn = head.next;
  top.val = 'a';
  // 先判断第一个有没有连接的节点
  // 有
  if (top.next) {
      while (flag) {
          // 指向下一个
          top = top.next;
          top.next = btn.next;
          btn = btn.next;
          btn.next = top.next.next;
          top.val = 'a';
          // 遇到了null
          if (!top)
              return false;
          // 没有遇到null 如何判断呢
          else {
              if (top.val == 'a');
              return true;
          }
              
      }
  }
  // 没有
  else
      return false;
};