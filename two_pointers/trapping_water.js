const trap = function (height) {
  if (!height) return 0;

  let result = 0,
    left = 0,
    right = height.length - 1,
    maxL = height[left], // keeps track of max height on left side
    maxR = height[right]; // keeps track of max height on right side

  while (left < right) {
    // while left pointer is less than right, keep going
    if (maxL < maxR) {
      // if maxL is less than maxR, then...
      left++; // increase left pointer by one
      maxL = Math.max(height[left], maxL); // check which one is bigger, height[left] or maxL and reassign to maxL
      // this will give us the lowest bound and help with our subtraction
      result += maxL - height[left]; // add to result the difference between maxL and height[left], won't ever be negative bc maxL was calculated first
    } else {
      // else, maxR is smaller than maxL
      right--; // decrease right pointer by one
      maxR = Math.max(height[right], maxR); //check which one is bigger, height[right] or maxR and reassign to maxR
      result += maxR - height[right]; // add to result the difference between maxR and height[right]
    }
  }
  return result; // return result which is total sum
};

// TC: O(N), SC: O(1)
