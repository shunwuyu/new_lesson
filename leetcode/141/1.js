var hasCycle = function(head) {
  var map = new Map()
  while(head) {
    if (map.has(head)) {
      return true
    } else {
      map.set(head)
    }
    head = head.next
  }
  return false
}