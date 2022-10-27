const lengthOfLastWord = function (s) {
  let count = 0; // start word count at zero

  for (let i = s.length - 1; i >= 0; i--) {
    // since we want length of last word, loop backwards

    if (s[i] !== ' ') {
      // if s[i] val isn't a space...
      count++; // increase count
    } else if (count > 0) {
      // else if it is a space, and count is greater than 0...
      break; // then break out of loop
    }
  }
  return count; // return count of letters
};

// TC: O(N); SC: O(1)
