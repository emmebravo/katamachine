const replaceElements = function (arr) {
  let max = arr[arr.length - 1]; // set max equal to value at last idx
  arr[arr.length - 1] = -1; // set last idx value at -1

  // loop backwards starting from second to last idx
  for (let i = arr.length - 2; i >= 0; i--) {
    let curr = arr[i]; // save arr[i] to curr, so we can replace arr[i] val
    arr[i] = max; // replace arr[i] val with max value
    if (curr > max) max = curr; // compare if curr val is greater than max, if it is set max to equal curr val
  }

  return arr; // return arr
};

// TC: O(N), SC: O(1)
