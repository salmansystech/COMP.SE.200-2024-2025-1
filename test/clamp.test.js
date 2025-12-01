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

  test('NaN lower bound converts to 0', () => {
  const res = clamp(5, NaN, 10);
  expect(res).toBe(10);
});

test('NaN upper bound converts to 0', () => {
  const res = clamp(5, 0, NaN);
  expect(res).toBe(0);
});

test('Both NaN converts to 0', () => {
  const res = clamp(50, NaN, NaN);
  expect(res).toBe(0);
});

});
