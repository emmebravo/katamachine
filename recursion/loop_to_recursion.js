function logNumbers(start, end) {
  console.log(`iteratively looping from ${start} until ${end}`);

  for (var i = start; i <= end; i++) {
    console.log('hitting index', i);
  }
}

console.log('~~~ logNumbers ~~~');
console.log('final: ', logNumbers(1, 3));

function logNumbersRecursively(start, end) {
  console.log(`recursively looping from ${start} until ${end}`);

  function recurse(i) {
    console.log('hitting index', i);
    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

function logNumbersRecursively(start, end) {
  console.log(`recursively looping from ${start} until ${end}`);
  if (start < end) {
    logNumbersRecursively(start + 1, end);
  }
}

console.log('~~~ logNumbersRecursively ~~~');
console.log('final ', logNumbersRecursively(1, 3));
