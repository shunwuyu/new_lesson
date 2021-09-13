// 两个指针 快慢指针
var hasCycle = function(head) {
  if (!head) return false;
  let fast = head;
  let low = head;
  // O(n)
  while(fast && low) {
    low = low.next;
    fast = fast.next && fast.next.next;
    if (low && low === fast) return true;
  }
  return false;
}