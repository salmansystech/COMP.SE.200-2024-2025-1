// isEmpty.test.js
import isEmpty from '../src/isEmpty';

describe('isEmpty()', () => {
  // 1. Null and undefined
  test('returns true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  // 2. Booleans and numbers
  test('returns true for boolean and number values', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(42)).toBe(true);
  });

  // 3. Arrays and strings
  test('returns true for empty arrays or strings, false otherwise', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('abc')).toBe(false);
  });

  // 4. Objects
  test('returns true for empty objects, false for objects with properties', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  // 5. Maps and Sets
  test('returns true for empty maps or sets, false otherwise', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });

  // 6. Arguments object
  test('returns true for empty arguments, false otherwise', () => {
    function argsTest() {
      return isEmpty(arguments);
    }
    expect(argsTest()).toBe(true);
    expect(argsTest(1, 2)).toBe(false);
  });

  // 7. Typed arrays
  test('returns true for empty typed arrays, false otherwise', () => {
    expect(isEmpty(new Uint8Array())).toBe(true);
    expect(isEmpty(new Uint8Array([1, 2]))).toBe(false);
  });

  // 8. Prototype objects (should check only own keys)
test('returns true for prototype objects with no own properties', () => {
  function Test() {}
  expect(isEmpty(Test.prototype)).toBe(true);
});

// 9. Objects with non-enumerable properties (should still be considered empty)
test('returns true when object has only non-enumerable properties', () => {
  const obj = {};
  Object.defineProperty(obj, 'hidden', {
    value: 123,
    enumerable: false
  });
  expect(isEmpty(obj)).toBe(true);
});

// 10. Array-like objects that are NOT arrays (length=0)
test('returns false for array-like object with length 0 (because it has own keys)', () => {
  const arrLike = { length: 0 };
  expect(isEmpty(arrLike)).toBe(false);
});

// 11. Array-like object with length > 0
test('returns false for array-like object with length > 0', () => {
  const arrLike = { length: 2, 0: 'a', 1: 'b' };
  expect(isEmpty(arrLike)).toBe(false);
});

// 12. Buffer objects
test('returns true for empty Buffer, false otherwise', () => {
  const emptyBuf = Buffer.alloc(0);
  const filledBuf = Buffer.from([1, 2, 3]);

  expect(isEmpty(emptyBuf)).toBe(true);
  expect(isEmpty(filledBuf)).toBe(false);
});

// 13. Objects with inherited properties only
test('returns true when object only has inherited properties', () => {
  const parent = { a: 1 };
  const child = Object.create(parent);
  expect(isEmpty(child)).toBe(true);
});

// 14. Custom iterable objects (not Map or Set)
test('returns true for custom iterable with no own keys', () => {
  const iterable = {
    [Symbol.iterator]: function* () {
      yield 1;
    }
  };
  expect(isEmpty(iterable)).toBe(true);
});
});
