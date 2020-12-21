/**
 * Deep Equality
 *
 For this question we want to show the deep equality of two hashmaps. To simpify the problem, you can assume that each hash map always uses a string as a key and a map, number, or string as a value. For the purpose of this problem, you can assume that any equals operator for two hash maps is not enabled.
 *
 *
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
};

const testEquals = (obj1, obj2) => {
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
};

testEquals();
