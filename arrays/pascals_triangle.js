const generate = function (numRows) {
  const result = [[1]]; // result arr with first row

  for (let i = 1; i < numRows; i++) {
    // start loop from idx 1 as result already contains first subarray
    const newArr = [1]; // start newArr with 1 as the sides of pascal's triangle are always 1
    const prevArr = result[result.length - 1]; // take last array in result to use it in the sum

    for (let j = 0; j < prevArr.length - 1; j++) {
      // loop through prevArr up until second to last element so we don't go out of bounds
      const sum = prevArr[j] + prevArr[j + 1]; // find sum of adjacent vals in prevArr
      newArr.push(sum); // push the sum into the newArr
    }

    newArr.push(1); // add the last number of the row to newArr, which is always 1
    result.push(newArr); // push newArr into result
  }

  return result; // return result arr
};

// TC: O(N^2); SC: O(N^2) --if we count output arr as extra space
