// W R A P P E R F C N
// 1st recursive pattern

function wrapperFnLoop(start, end) {
  // this fcn is using a C L O S U R E
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

// i already did this in loop_to_recursion (all by meself <3)
function MemoFnLoop(i, end) {
  console.log(`looping from ${i} until ${end}`);
  if (i < end) {
    MemoFnLoop(i + 1, end);
  }
}

console.log('~~~ wrapperFnLoop ~~~');
wrapperFnLoop(1, 5);
console.log('~~~ MemoFnLoop ~~~');
MemoFnLoop(1, 6);
