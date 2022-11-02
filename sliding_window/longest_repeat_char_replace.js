const characterReplacement = function (str, k) {
  let left = 0, // left and right poitner for window
    right = 0,
    result = 0,
    map = {},
    freqChar = 0; // keep track of most freq char in str

  for (right = 0; right < str.length; right++) {
    map[str[right]] = map[str[right]] + 1 || 1;
    // build out map, if str[right] is not found, assign it to 1; otherwise increase by 1
    freqChar = Math.max(map[str[right]], freqChar);
    // check which is a higher freqChar, the current freqChar or the val at map[str[right]]
    // if our window shrinks, and our freqChar goes down, it won't affect our final answer, so we only care if it needs to go up

    while (right - left + 1 - freqChar > k) {
      // if this while condition is true, it means our window length is not valid, and we are out of replacements, so we have to...
      map[str[left]] -= 1; // remove the letter at str[left]
      left++; // and shrink window by increasing left pointer
    }
    result = Math.max(right - left + 1, result); // assign result whichever is bigger, the result or the current window length
  }
  return result;
};

// TC: O(N), SC: O(N)
