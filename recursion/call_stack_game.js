/*
C A L L S T A C K G A M E

1. Push called Fn on stack.
2. Execute Fn body.
	until...
	either...another fn is called:
     		Pause the current execution and start at step 1.
	or...a return is hit:
		Pop the current Fn off the stack.
	Resume executing the previous Fn.

const callMe = function () {
  // fcn body is anything that lives between these two curly brackets
  callMe();
  callMe();
  callMe('anytime');
};

// this fcn is an infinite loop
callMe();
*/

// EXAMPLE
var tracker = 0;
console.log(tracker);
var callMe = function (arg) {
  tracker++;
  console.log(tracker);
  console.log(arg);
  if (tracker === 3) {
    return `loops! ${arg}`;
  }
  return callMe('anytime');
};

console.log('final: ', callMe()); // loops
