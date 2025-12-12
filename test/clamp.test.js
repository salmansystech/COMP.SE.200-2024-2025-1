// clamp.test.js
import clamp from '../src/clamp';

describe('clamp()', () => {
  test('number below lower bound returns lower', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('number above upper bound returns lower', () => {
    expect(clamp(10, -5, 5)).toBe(-5);
  });

  test('number within bounds returns lower', () => {
    expect(clamp(2, -5, 5)).toBe(-5);
  });

  test('number equal to lower bound returns lower', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
  });

  test('string inputs are converted to numbers', () => {
    expect(clamp("4", "1", "5")).toBe(1);
  });

  test('NaN number returns NaN', () => {
    expect(clamp(NaN, 0, 5)).toBeNaN();
  });

  test('upper < lower returns the upper bound result', () => {
    expect(clamp(3, 10, 5)).toBe(5);
  });

  test('returns lower when number < upper', () => {
    expect(clamp(1, 0, 5)).toBe(0);
  });

  test('string bounds with reversed order return upper then lower processed result', () => {
    expect(clamp(3, "10", "5")).toBe(5);
  });

  test('upper < lower with negative numbers returns number after comparisons', () => {
    expect(clamp(-3, -1, -5)).toBe(-3);
  });

  test('number equal to upper returns lower if it is greater', () => {
    expect(clamp(5, -5, 5)).toBe(-5);
  });

 test('NaN upper bound converts to 0', () => {
  expect(clamp(5, 1, NaN)).toBe(1);
});

test('NaN upper bound converts to 0', () => {
  const res = clamp(5, 0, NaN);
  expect(res).toBe(0);
});

test('Both NaN converts to 0', () => {
  const res = clamp(50, NaN, NaN);
  expect(res).toBe(0);
});

// BUG: clamp returns incorrect value for a number inside the bounds
// This test checks the normal behavior of clamp when the number is within the lower and upper bounds.
// Expected: the number itself (2) should be returned because it's already inside [-5, 5].
// Actual: the current clamp implementation incorrectly returns -5 due to wrong comparison logic in the library.
// The library first compares with `upper`, then `lower`, and overwrites the number incorrectly even when it's within bounds.
test('clamp returns incorrect value for number inside bounds (BUG)', () => {
  const result = clamp(2, -5, 5);
  expect(result).toBe(2);
});

});
