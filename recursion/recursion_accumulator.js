// A C C U M U L A T O R
// 2nd recursive pattern

function joinElements(array, joinString) {
  // resultSoFar = accumulator
  console.log('initial array ', array);
  console.log('initial joinString ', joinString);

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    console.log(`element ${array[index]} at index ${index}`);
    console.log({ resultSoFar });

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString); // reaching up and getting joinString from parent scope
    }
  }

  return recurse(0, '');
}

console.log('final: ', joinElements(['s', 'cr', 't cod', ' :) :)'], 'e'));
