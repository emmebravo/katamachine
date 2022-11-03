const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head),
    left = dummy,
    right = head;

  while (n > 0) {
    right = right.next;
    n -= 1;
  }

  while (right !== null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};
