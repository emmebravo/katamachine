const isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/g, // stupid regex, removes all non-alphanumeric chars
    str = s.replace(regex, '').toLowerCase(); // new str with all non-alphanumeric replaced by nothing and lowercase

  if (!str.length) return true; // if the new str length is zero, it's a palindrome

  let left = 0, // start left at 0
    right = str.length - 1; // start right at end of str

  while (left < right) {
    // while left pointer less than right, keep going
    if (str[left] !== str[right]) {
      // if left letter is not equal to right letter it's not a palindrome, return false
      return false;
    }
    // otherwise keep going by increasing left and decreasing right
    left++;
    right--;
  }

  return true; // if i finish while loop w/o a false, then return true
};

// TC: O(N), SC: O(1) --> if we ignore the new str

console.log(isPalindrome('A man, a plan, a canal: Panama'));
