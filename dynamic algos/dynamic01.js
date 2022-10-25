// D Y N A M I C P R O G R A M M I N G
// if you can break it into subproblems, and the subproblems are optimal (they are giving you the correct answer), you can cache these values

// if you have a solution you can cache, it's dynamic programming
// top-down recursive technique
// // start from 12, the end result and we break it up into smaller pieces, and we cache if we recalculate
// bottom-up iterative technique
// // translate the recursive into an iterative solution starting from the simplest problem, and you cache

// dynamic programming vs divide and conquer
// // dynamic programming has repeated calculations you can cache

// Memoization + Recursive Approach
const cache = {}; // this global cache is not bueno
const coins = [10, 6, 1];

const makeChange = (c) => {
  // Return the value if it’s in the cache
  if (cache[c]) return cache[c];

  let minCoins = -1;

  // Find the best coin
  coins.forEach((coin) => {
    if (c - coin >= 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  // Save the value into the cache
  cache[c] = minCoins + 1;
  return cache[c];
};

console.log(makeChange(12));
