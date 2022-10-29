const longestConsecutive = function (nums) {
  const set = new Set(nums); // to keeps numbers from repeating
  let longest = 0; // keep track of longest sequence

  for (let num of nums) {
    // loop over nums array
    if (!set.has(num - 1)) {
      // check if num has a left neighbor, it it doesn't that means it's the start of a sequence
      let count = 0; // initial length of sequence
      while (set.has(num)) {
        // after starting a sequence, keep checking if our number exists in the set, if it does, keep going
        num++; // check for the next number in sequence
        count++; // increment count of sequence
      }
      longest = Math.max(longest, count); // which is greater, longest or count, then reassign that to longest
    }
  }
  return longest; // return longest
};

// TC: O(N), SC: O(N)

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
