/**
 *
 For this question we want you to synchronize two lists. Each list contains a set of numbers. The goal of the problem is to return the list of numbers which are not contained in both lists.

 *
 */

const sync = (arr1, arr2) => {
  //create maps of arrays and res array
  const map1 = {};
  const map2 = {};
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    map1[current] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    const current = arr2[i];
    map2[current] = true;
  }
  //for each element that is not found in the other map, push to res array
  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    if (!map2[current]) {
      res.push(current);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const current = arr2[i];
    if (!map1[current]) {
      res.push(current);
    }
  }

  return res;
};

const testSync = () => {
  console.log(sync([1, 2, 3], [1, 3, 4]), ' ==> [2, 4]');
  console.log(sync([1, 9], [1]), ' ==> [9]');
  console.log(sync([1, 2, 3], [1, 2, 3]), ' ==> []');
  console.log(sync([1, 9], []), ' ==> [1,9]');
};

testSync();
