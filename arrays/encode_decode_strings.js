const encode = function (arr) {
  let result = '';

  for (let str of arr) {
    result += `${str.length}#${str}`;
  }

  return result;
};

const decode = function (str) {
  let i, j, length, res;
  [res, i] = [[], 0];

  while (i < str.length) {
    j = i;

    while (str[j] !== '#') {
      j += 1;
    }

    length = Number.parseInt(str.slice(i, j));
    res.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return res;
};

// TC: O(N), SP: O(1)

console.log(encode(['lint', 'code', 'love', 'you']));
console.log(decode('4#lint4#code4#love3#you'));
