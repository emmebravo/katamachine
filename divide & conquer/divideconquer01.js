// D I V I D E A N D C O N Q U E R
// recursive technique for taking a larger problem and breaking into subproblems, and doing work on each of those subproblems to reach some goal, solution

/*
Recursive calls to a subset of problems
0. Recognize base case
1. Divide: Break problem down during each call
2. Conquer: Do work on each subset
3. Combine: Solutions
*/

// linear search (not d&c, yet)
function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) return i;
  }
  return false;
}

console.log('l: ', linearSearch([2, 6, 7, 90, 103], 90));

// binary search
function binarySearch(list, item) {
  let low = 0,
    high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (list[mid] === item) return mid;
    else if (list[mid] > item) high = mid - 1;
    else low = mid + 1;
  }

  return false;
}

console.log('b: ', binarySearch([2, 6, 7, 90, 103], 90));
