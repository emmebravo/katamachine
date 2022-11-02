const findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    min = nums[0],
    mid;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      min = Math.min(nums[left], min);
      break;
    }

    mid = Math.floor(left + (right - left) / 2);
    min = Math.min(min, nums[mid]);
    if (nums[mid] >= nums[left]) left = mid + 1;
    else right = mid - 1;
  }
  return min;
};
