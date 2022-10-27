// while loop
const isSubsequence = function (s, t) {
  // all chars in string 's' must be found in string 't' for this to be true

  let i = 0,
    j = 0; // start two pointers, i to traverse string 's', j for string 't'

  while (i < s.length && j < t.length) {
    // while each pointer for each string is not out of bounds, check the following

    if (s[i] === t[j]) {
      // if s[i] val is the same as j[i] val
      i++; // increment i
    }
    j++; // regardless of any condition, increase j bc we need to check all of string 't'
  }
  return i === s.length; // if i equals the length of string 's', it means we found all chars in string 's', return true
};

// for-loop
const isSubsequence = function (s, t) {
  let i = 0; // outside pointer for string 's'

  for (let j = 0; j < t.length; j++) {
    // use for-loop to traverse through string 't' & use the j-index as the second pointer
    if (s[i] === t[j]) {
      // if s[i] val is equal to j[i] val
      i++; // increase i
    }
  }
  return i === s.length; // if i equals the length of string 's', it means we found all chars in string 's', return true
};

// TC: O(N), SC: O(1)
