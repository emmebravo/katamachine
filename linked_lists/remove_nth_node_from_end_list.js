const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head), // dummy node to be able to remove correct node
    left = dummy, // left points at dummy node
    right = head; // technically we want head + n to know how much to shift

  while (n > 0) {
    // keep shifting right to get to the node before the one we need to remove
    // get n to equal 0 bc then we've shifted enough
    right = right.next;
    n -= 1;
  }

  while (right !== null) {
    // shift pointers until right reaches the end of list leaving left at the node before the one we want removed
    left = left.next;
    right = right.next;
  }

  // delete node by assign left.next to skip to the next next
  left.next = left.next.next;

  return dummy.next; // do not include dummy node bc we don't want to include a new node
};

// TC: O(N); SC: O(1)
