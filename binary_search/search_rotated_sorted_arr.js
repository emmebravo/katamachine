const search = function (nums, target) {
  if (!nums.length) return -1; // if no arr exists, return -1

  // binary search pointers
  let min = 0,
    max = nums.length - 1,
    midpoint;

  while (min <= max) {
    // while min less than or equal to max, then...
    midpoint = Math.floor(min + (max - min) / 2); // find midpoint

    if (nums[midpoint] === target) {
      // if nums[midpoint] equals the target num then return midpoint/idx
      return midpoint;
    }

    //check if number is in left part sorted array
    if (nums[min] <= nums[midpoint]) {
      // it's on the left bc nums[min] is less than nums[midpoint]
      if (nums[min] <= target && target < nums[midpoint]) {
        // if nums[min] is less than target, and target is less tha midpoint, change max to be smaller than midpoint
        max = midpoint - 1;
      } else {
        // otherwise change min to be bigger than midpoint
        min = midpoint + 1;
      }
    } else {
      // if it's not in the left (if), then it's in the right (else)
      if (nums[midpoint] < target && target <= nums[max]) {
        min = midpoint + 1;
      } else {
        max = midpoint - 1;
      }
    }
  }
  return -1;
};

// TC: O(log n); SC: O(1)
