const maxArea = (height) => {
  let result = 0, // how much water each window has
    left = 0, // left/start pointer
    right = height.length - 1; // right/end pointer

  while (left < right) {
    // while left is less than right, keep loop going
    const area = (right - left) * Math.min(height[left], height[right]);
    // calculate area of h2o: width = (right - left),  height = min height of either pointer bc that's how deep the water can be contained
    result = Math.max(result, area); // which is larger, result or water, then reassign val to result
    if (height[left] < height[right]) {
      // if left height is less than right height
      left++; // move left pointer
    } else {
      // otherwise move right pointer
      right--;
    }
  }
  return result; // return result
};

// TC: O(N), SC: O(1)
