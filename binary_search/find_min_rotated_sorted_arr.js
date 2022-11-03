const findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    min = nums[0], // in regular BS, first element is the smallest, for this problem, use first element as min to start with
    midpoint;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      // this is for when a subarray is already sorted
      min = Math.min(nums[left], min);
      break;
    }

    midpoint = Math.floor(left + (right - left) / 2);
    min = Math.min(min, nums[midpoint]);
    if (nums[midpoint] >= nums[left]) {
      // if nums[mid] is greater than nums[left], then search right portion of sorted arr
      left = midpoint + 1;
    } else {
      // otherwise, search left side of sorted arr
      right = midpoint - 1;
    }
  }
  return min;
};

// TC: O(log n); SC: O(1)
