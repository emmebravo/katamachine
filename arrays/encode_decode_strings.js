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

console.log(encod(['lint', 'code', 'love', 'you']));
console.log(decod('lint@enconde@code@enconde@love@enconde@you'));
