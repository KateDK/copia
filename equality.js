/**
 * Deep Equality
 *
 For this question we want to show the deep equality of two hashmaps. To simpify the problem, you can assume that each hash map always uses a string as a key and a map, number, or string as a value. For the purpose of this problem, you can assume that any equals operator for two hash maps is not enabled.
 *
 *
 */

const equals = () => {};

const testEquals = () => {
const equals = (obj1, obj2) => {
  //Want to get array of keys to loop over
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  console.log(
    equals(
      { key1: 'value', key2: { key3: 1 } },
      { key1: 'value', key2: { key3: 1 } }
    ),
    ' ==> true'
  );
};

testEquals();
