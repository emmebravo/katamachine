const mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0, null); // takes care of empty list edge case
  let curr = dummy; // curr node is referencing dummy node; curr.next is null

  while (list1 && list2) {
    // while both lists have nodes
    if (list1.val < list2.val) {
      // if list1 node val less than list2
      curr.next = list1; // assign list1 node to curr.next
      list1 = list1.next; // move list1 curr pointer to list1.next aka rest of list
    } else {
      // else list2 node val less than list1
      curr.next = list2; // assign list2 node to curr.next
      list2 = list2.next; // move list2 curr pointer to list2.next aka rest of list
    }
    curr = curr.next; // update curr pointer regardless of conditions
  }

  curr.next = list1 || list2; // append any remaining nodes to end of list

  return dummy.next; // return dummy.next which will be pointed to the first actual node in our list
};

// TC: O(N); SC: O(N)
