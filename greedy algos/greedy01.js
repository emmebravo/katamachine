// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25
// input amount: 40 , output # of coins: 3 (25, 10, 5)
// input amount: 35, output # of coins: 2 (25, 10)

const makeChange = (coins, amt) => {
  coins.sort((a, b) => b - a);
  let coinTotal = 0,
    idx = 0;

  while (amt > 0) {
    if (coins[idx] <= amt) {
      amt -= coins[idx];
      coinTotal++;
    } else idx++;
  }
  return coinTotal;
};

console.log(makeChange([5, 10, 25], 50));
console.log(makeChange([1, 6, 10], 12)); // 3, which is not the best solution
