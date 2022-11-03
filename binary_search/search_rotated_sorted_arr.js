const search = function (nums, target) {
  if (!nums.length) return -1; // if no arr exists, return -1

  // binary search pointers
  let left = 0,
    right = nums.length - 1,
    midpoint;

  while (left <= right) {
    // while left less than or equal to right, then...
    midpoint = Math.floor(left + (right - left) / 2); // find midpoint

    if (nums[midpoint] === target) {
      // if nums[midpoint] equals the target num then return midpoint/idx
      return midpoint;
    }

    //check if number is in left sorted array
    if (nums[left] <= nums[midpoint]) {
      // it's on the left bc nums[left] is less than nums[midpoint]
      if (nums[left] <= target && target < nums[midpoint]) {
        // if true, target is in the left side
        right = midpoint - 1;
      } else {
        // target is in the right
        left = midpoint + 1;
      }
    } else {
      // if it's not in the left (if), then it's in the right (else) sorted array
      if (nums[midpoint] < target && target <= nums[right]) {
        // target is in the right;
        left = midpoint + 1;
      } else {
        // target is in the left
        right = midpoint - 1;
      }
    }
  }
  return -1; // target is not in the array
};

// TC: O(log n); SC: O(1)
