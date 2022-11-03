const hasCycle = function (head) {
  // Floyd's Tortoise & Hare Algo
  let slow = head, // both pointers start at head
    fast = head;

  while (fast && fast.next) {
    slow = slow.next; // slow pointer is shifted by 1 to slow.next
    fast = fast.next.next; // fast pointer is shifted by 2

    if (fast === slow) {
      // if fast && slow meet, there's a cycle
      return true;
    }
  }
  return false; // when there's no cycle
};

// TC: O(N); SC: O(1)
