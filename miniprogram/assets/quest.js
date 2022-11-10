var reverseList = function(head) {
  let prev = null
  let cur = head
  while (cur) {
    const after = cur.next
    cur.next = prev

    prev = cur
    cur = after
  }
  return prev
};

// head = [1,2,3,4,5]
// [5,4,3,2,1]