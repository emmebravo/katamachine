// S O R T I N G T Y P E S
// comparison sorts

/*
NAIVE SORTS
Keep looping and comparing values until the list is sorted
Big O: quadratic, O(n^2)

1. Bubble Sort
	a. Loop through an array, comparing adjacent indices and swapping the greater value to the end
2. Insertion Sort
3. Selection Sort
*/

/*
DIVIDE & CONQUER SORTS
Recursively divide lists and sort smaller parts of list until entire list is sorted

1. Mergesort
	a. Recursively merge sorted sub-lists.
	- keep dividing in half until you have a sorted list of 1 item
	- then after you return from your recursion, we are going to start merging

2. Quicksort
*/

// PSEUDOCODE: MERGE ROUTINE

merge(l, r);
// l: [3, 27, 38, 43], r: [9, 10, 82];
// initialize empty arr
// compare first index of hte left arr with the first index of the right arr
// push smaller value to empty array
// shift/slice(1) the arr with lower value
// repeat until both arrays are empty
// return initialized arr

mergeSort(list);
// base case: if list.length < 2, return
// break the list into halves L & R
// Lsorted = mergeSort(L)
// Rsorted = mergeSort(R)
// return merge(Lsorted, Rsorted)
