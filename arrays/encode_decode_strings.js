// design algo

const encode = function (arr) {
  let result = ''; // start with empty string

  for (let str of arr) {
    // loop through each str in array
    result += `${str.length}#${str}`;
    // to the result empty str, add the length of word + # with the remaining word as encoding
    // having this delimiter num# will tell us how long the word is and if there's a # used in a string, it won't accidentally delimit it
  }
  return result; // return encoded str
};

const decode = function (str) {
  let i, j, length, res; // declare different variables
  [res, i] = [[], 0]; // destructure arr and reassign res = [], i = 0

  while (i < str.length) {
    // while i is less than the str length, continue loop

    j = i; // j will look through each letter, so it starts at same position as i
    while (str[j] !== '#') {
      // while letter str[j] is not a pound sign, keep increasing j
      j += 1;
    }
    length = Number.parseInt(str.slice(i, j)); // length is the str.length including i upto j, but not included j, and parse that into a number
    res.push(str.slice(j + 1, j + 1 + length)); // push into res arr the string from j + 1 (the letter after #) upto, but not including, j + 1 + length of str determine above
    i = j + 1 + length; // update i to the end of the word we just pushed
  }
  return res; // return res arr
};

// TC: O(N), SP: O(1)

// using methods
const encod = function (arr) {
  if (!arr.length) {
    return null;
  }
  return arr.join('@enconde@');
};

const decod = function (str) {
  if (str === null) {
    return [];
  }
  return str.split('@enconde@');
};
