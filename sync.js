/**
 *
 For this question we want you to synchronize two lists. Each list contains a set of numbers. The goal of the problem is to return the list of numbers which are not contained in both lists.

 *
 */

const sync = (arr1, arr2) => {
};

const testSync = () => {
  console.log(sync([1, 2, 3], [1, 3, 4]), ' ==> [2, 4]');
  console.log(sync([1, 9], [1]), ' ==> [9]');
  console.log(sync([1, 2, 3], [1, 2, 3]), ' ==> []');
};

testSync();
