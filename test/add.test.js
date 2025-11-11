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
});
