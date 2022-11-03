const mergeKLists = function (lists) {
  if (!lists.length || lists === null) {
    return null;
  }
  return mergeList(lists);
};

const mergeList = function (list) {
  if (list.length < 2) return list[0];
  const midpoint = parseInt(list.length / 2), // get midpoint of list
    left = list.slice(0, midpoint), // the list from the left side
    right = list.slice(midpoint, list.length); // the list from the right side

  return merge(mergeList(left), mergeList(right)); // merge them using merge sort
};

const merge = function (list1, list2) {
  let answer = new ListNode(0, null), // if there happens to be an empty list
    dummy = answer; // referencing answer node

  while (list1 && list2) {
    // while both list have equal lengths
    if (list1.val < list2.val) {
      // if list1 node val is less than list2 node val
      dummy.next = list1; // assign list1 node to dummy.next
      list1 = list1.next; // move list1 pointer to list1.next
    } else {
      // else, list2 node val less than list1 node val
      dummy.next = list2; // assign list2 node to dummy.next
      list2 = list2.next; // move list2 pointer to list2.next;
    }
    dummy = dummy.next; // regardless of conditions, we're moving the dummy forward
  }

  dummy.next = list1 || list2; // append any remaining nodes to end of list

  return answer.next; // return dummy.next which is the actual first node in our list
};

// TC: O(N log n); SC: O(N)
