function computeFactorialL(num) {
  var result = 1;

  for (var i = 2; i <= num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
}

console.log('final: ', computeFactorialL(5));

function computeFactorialR(num) {
  if (num === 1) {
    console.log('hitting the base case');
    return 1;
  } else {
    console.log(`returning ${num} * computeFactorialR(${num - 1})`);
    return num * computeFactorialR(num - 1);
  }
}

console.log('final: ', computeFactorialR(5));
