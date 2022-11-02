const lengthOfLongestSubstring = function (str) {
  let left = 0, // start left at zero
    right = 0, // start right at zero
    maxLength = 0; // max length of substring
  const set = new Set(); // keep track of letters seen

  while (right < str.length) {
    // while right pointer is less than str length, keep going
    if (!set.has(str[right])) {
      // if set doesn't have str[right] char, then...
      set.add(str[right]); // add it to set
      maxLength = Math.max(maxLength, right - left + 1);
      // check for max number between maxLength && r - left + 1 (plus one bc it's the one letter we're standing on) and reassign to maxLength
      right++; // and increase right pointer by one
    } else {
      // if str[right] char is in set, then...
      set.delete(str[left]); // remove the str[left] char
      left++; // and increase left pointer by one
    }
  }
  return maxLength; // return maxLength
};

// TC: O(N), SC: O(N)
