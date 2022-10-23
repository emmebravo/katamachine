/*
Recursion in 4 Steps

1. Identify base case(s).
	// when do you want your loop to stop?
	// in a for-loop, i < Array.length gives it a stopping condition when it reaches greater than the Array.length
2. Identify recursive case(s).
	// the work you wanna do for each loop
	// add some numbers, or remove some data
	// otherwise you won't meet your basecase and infinite loop
3. Return where appropriate.
	// explicitly return, or fcn will implicitly return undefined
4. Write procedures for each case that bring you closer to the base case(s).
*/

/*
var callMyself = function () {
  if (something) {
    // base case
    return;
  } else {
    // recursive case
    callMyself();
  }

  return;
};
*/

const loopNTimes = (n) => {
  console.log('n ===', n);
  if (n <= 1) {
    return 'complete';
  }
  return loopNTimes(n - 1);
};

console.log('final: ', loopNTimes(3));
