const topKFrequent = function (nums, k) {
  // bucket sort algo

  const map = {}, // create a map to keep track of element/num instances
    bucket = [...Array(nums.length + 1)].map((arr) => Array());
  // create new arr of 1 length longer than given arr; map through new arr, and replace 'undefined' with empty arr's

  for (let num of nums) {
    // loop through given arr and map instances of each element/num
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  for (const num in map) {
    // loop through map and get num: count pair; in bucket sort arr, count determines bucket arr idx and num is the value to push into said idx
    const count = map[num];
    bucket[count].push(num);
  }

  const results = []; // initialize results arr
  for (let i = bucket.length - 1; i > -1; i--) {
    // loop through bucket arr starting from the end
    for (let item of bucket[i]) {
      // if the inner arr's have items, push them to the result
      results.push(item);
      if (results.length === k) {
        // check if result arr length is equal to k, once it is, simply return the results arr
        return results;
      }
    }
  }
};

// TC: O(N), SC: O(N)
