const minWindow = (s, t) => {
  if (s.length < t.length) return ''; // if str 's' length is less than t, then return empty ''

  const letterMapOfT = {}; // hash map to keep track of letters in str 't' we need
  let countOfCharsInT = t.length; // how many chars we need, which is str 't' length

  for (let letter of t) {
    // loop through every letter of str 't', and...
    letterMapOfT[letter] = letterMapOfT[letter] + 1 || 1; // if not in map, add it; otherwise increase by 1
  }

  let left = 0, // start left & right pointer at zero
    right = 0,
    minStr = ''; // the minStr start empty
  while (right < s.length) {
    // while right pointer is less than str 's' length, keep going
    if (letterMapOfT[s[right]] > 0) {
      // if the s[right] char is more than 0 inside map, then...
      countOfCharsInT--; // decrease countOfCharsInT by 1, otherwise we have all the those chars we need
    }
    if (s[right] in letterMapOfT) {
      // if s[right] char is inside map, then...
      letterMapOfT[s[right]]--; // decrease its val by 1
    }
    right++; // increase the window size by increasing right pointe by 1

    while (countOfCharsInT === 0) {
      // when this is zero, it means we have all the chars we need to fulfill task, but it doesn't mean it's the minimum window possible
      // while countOfCharsInT is equal to zero (meaning we have all letters of str 't' in our window)
      if (minStr === '') {
        // if minStr is empty, then...
        minStr = s.slice(left, right); // reassign minStr to s.slice(left, right) which is the current str length that fulfills requirements
      }
      if (minStr.length > right - left) {
        // if minStr has a length, check if it's greater than the difference between current right and left. if it is, then reassign minStr to the new smaller window
        minStr = s.slice(left, right);
      }

      // since we're shrinking the sliding window from the left, we're going to check a couple things
      if (s[left] in letterMapOfT) {
        // if s[left] char is in the map
        letterMapOfT[s[left]]++; // increase the count by 1, since we're losing it and we need to find it later in str 's'
      }
      if (letterMapOfT[s[left]] > 0) {
        // if s[left] is bigger than zero, then...
        countOfCharsInT++; // increase the str 't' letter count we need
      }
      left++; // shrink the window from the left
    }
  }

  return minStr; // return the smallest minStr possible
};

// TC: O(N); SC: O(N)
