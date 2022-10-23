// Task 1: Without peeking, write your own recursive factorial method

function recursiveFactorial(num) {
  if (num === 1) return 1;
  else {
    return num * recursiveFactorial(num - 1);
  }
}

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memoize = (fcn) => {
  const cache = {};
  return (...arg) => {
    let n = arg[0];
    console.log(n);
    if (n in cache) return cache[n];
    else {
      let result = fcn(n);
      cache[n] = result;
      console.log(cache[n]);
      return result;
    }
  };
};

const recursiveFactorialCache = memoize((x) => {
  if (x === 1) return 1;
  else return x * recursiveFactorialCache(x - 1);
});

console.log(recursiveFactorial(5));
console.log(recursiveFactorialCache(5));
