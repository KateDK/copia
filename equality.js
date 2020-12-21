/**
 * Deep Equality
 *
 For this question we want to show the deep equality of two hashmaps. To simpify the problem, you can assume that each hash map always uses a string as a key and a map, number, or string as a value. For the purpose of this problem, you can assume that any equals operator for two hash maps is not enabled.
 *
 *
 * Time complexity O(n)
 * Space complexity: O(n)
 */

let sync = require('./sync');

const equals = (obj1, obj2) => {
  //Want to get array of keys to loop over
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  //if length of both keys arrays in not equal than return false
  if (keys1.length !== keys2.length) return false;
  //if any of the keys are not equal, return false
  if (sync(keys1, keys2).length) return false;
  //loop over keys and compare in both maps
  for (let i = 0; i < keys1.length; i++) {
    const current = keys1[i];
    //if types are different return false;
    if (typeof obj1[current] !== typeof obj2[current]) return false;
    //if the type of current value is object we want to recurse;
    if (typeof obj1[current] === 'object') {
      if (equals(obj1[current], obj2[current]) === false) return false;
    } else {
      //if value is different return false
      if (obj1[current] !== obj2[current]) return false;
    }
  }
  return true;
};

const testEquals = () => {
  console.log('Equals Tests:');
  console.log(
    equals(
      { key1: 'value', key2: { key3: 1 } },
      { key1: 'value', key2: { key3: 1 } }
    ),
    ' ==> true'
  );

  console.log(
    equals(
      { key1: 'value1', key2: { key3: 1 }, key4: 'value2' },
      { key1: 'value', key2: { key3: 1 } }
    ),
    ' ==> false'
  );

  //test for same number of keys but different key names
  console.log(
    equals(
      { key1: 'value1', key2: { key3: 1 }, key4: 'value2' },
      { key1: 'value', key2: { key3: 1 }, key5: 'value2' }
    ),
    ' ==> false'
  );
  //add tests with arrays
  console.log(
    equals(
      { key1: [1, 2], key2: { key3: 1 }, key4: 'value2' },
      { key1: [1, 2], key2: { key3: 1 }, key4: 'value2' }
    ),
    ' ==> true'
  );

  console.log(
    equals(
      { key1: [1, 2], key2: { key3: 1 }, key4: 'value2' },
      { key1: [1, 3], key2: { key3: 1 }, key4: 'value2' }
    ),
    ' ==> false'
  );

  console.log(
    equals(
      {
        key1: [{ key2: { key3: 1 }, key3: 1 }, 3],
        key2: { key3: 1 },
        key4: 'value2',
      },
      {
        key1: [{ key2: { key3: 1 }, key3: 1 }, 3],
        key2: { key3: 1 },
        key4: 'value2',
      }
    ),
    ' ==> true'
  );
};

testEquals();
