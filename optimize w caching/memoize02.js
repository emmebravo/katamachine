// E X E R C I S E 2
// MEMOIZE WITH CLOSURE

const times10 = (n) => n * 10;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

// step 2: hop into fcn body
const memoizedClosureTimes10 = () => {
  const cache = {}; // step 3: initialize cache as empty obj
  // the only reason for this parent fcn is to remove cache from global scope

  // step 4: return this fcn
  // important: when calling memoClosureTimes10, only the body of the fcn being return (below) is being called
  return (n) => {
    if (n in cache) return cache[n];
    else {
      let result = times10(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memoizedClosureTimes10(); // step 1: call fcn
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9)); // calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9)); // cached
} catch (e) {
  console.error('Task 3:', e);
}
