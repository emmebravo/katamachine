const reverseList = function (head) {
  let prev = null; // initialized reversed list as null
  let curr = head; // make a new pointer starting at head

  while (curr !== null) {
    const next = curr.next; // temp val to not lose reference of linked list
    curr.next = prev; // curr.next now points to prev val
    prev = curr; // prev now is curr val
    curr = next; // curr now is next val
  }

  return prev; // return prev
};

// TC: O(N); SC: O(1)
