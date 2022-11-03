const reorderList = function (head) {
  // use tortoise/hare algo to find midpoint of list
  let slow = head,
    fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // second half of list, which we're gonna reverse
  let second = slow.next, // val after midpoint
    prev = null;
  slow.next = null;

  while (second !== null) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // merge two halfs
  let first = head,
    segundo = prev;

  while (segundo !== null) {
    let temp1 = first.next,
      temp2 = segundo.next;
    first.next = segundo;
    segundo.next = temp1;
    first = temp1;
    segundo = temp2;
  }
};

// TC: O(N); SC: O(1)
