// add.test.js
import add from '../src/add';

describe('add()', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  test('handles missing second argument (defaults to 0)', () => {
    expect(add(7)).toBe(7);
  });

  added 5 more

  test('adds zero to a number', () => {
  expect(add(0, 9)).toBe(9);
});

test('adds decimal numbers correctly', () => {
  expect(add(2.5, 3.1)).toBeCloseTo(5.6);
});

test('adds very large numbers', () => {
  expect(add(1_000_000_000, 2_000_000_000)).toBe(3_000_000_000);
});

test('concatenates string numbers instead of adding them', () => {
expect(add("4", "6")).toBe("46");
});

test('concatenates non-numeric values as strings', () => {
  expect(add("hello", {})).toBe("hello[object Object]");
});

});
