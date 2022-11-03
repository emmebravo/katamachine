const reorderList = function (head) {
  // use tortoise/hare algo to find midpoint of list
  let slow = head,
    fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // second half of list, which we're gonna reverse
  let second = slow.next, // val after midpoint; start of second half
    prev = null;
  slow.next = null; // we want the last node in first half to point to null

  while (second !== null) {
    // reverse the second half of the list
    let temp = second.next; // use a temp variable to hold val of second.next
    second.next = prev;
    prev = second;
    second = temp;
  }

  // merge two halves
  let first = head, // left half
    newSecond = prev; // right half, prev point at right head

  while (newSecond !== null) {
    // we have two temp variables; one from the left side && one from the right side
    let temp1 = first.next,
      temp2 = newSecond.next;
    first.next = newSecond;
    newSecond.next = temp1;
    first = temp1;
    newSecond = temp2;
  }
};

// TC: O(N); SC: O(1)
