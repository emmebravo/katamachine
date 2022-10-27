const groupAnagrams = function (strs) {
  const map = {};
  if (strs.length < 2) return [strs];

  for (const word of strs) {
    let orderedWord = word.split('').sort().join('');

    if (orderedWord in map) {
      map[orderedWord].push(word);
    } else {
      map[orderedWord] = [word];
    }
  }

  return Object.values(map);
};

// TC: O(N); SC: O(N)
