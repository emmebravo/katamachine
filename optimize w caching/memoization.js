// Memoization: caching the value that a function returns
/*

- memoization is a type of caching
- caching, in JS, is saving something into an object or an array; if you refresh the page, it's gonna be erased; it's not safe on the disk--that's caching.

*/

const factorial = (n) => {
  // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
  return factorial;
};

factorial(35); // 35!

// if we already calculated factorial of 35, we don't need to start from scratch
factorial(36); // factorial(36) = factorial(35) * 36
