// const add = require("./math.js");
import { expect, test } from "vitest";
import { add } from "./math.js";

test("should sum all numbers in an array", () => {
  // ARRANGE
  const numbers = [1, 2];
  const expected = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  // ACT
  const result = add(numbers);
  // ASSERT
  expect(result).toBe(expected);
});

test("should yield NaN if there is one invalid number", () => {
  const inputs = ["invalid", 4];
  const result = add(inputs);
  expect(result).toBeNaN();
});

test("should yield a correct sum if an array of numeric string values are provided", () => {
  const numbers = ["1", "2"];
  const expected = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  const result = add(numbers);
  expect(result).toBe(expected);
});

test('should yield 0 if an empty array is provided', () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0)
})

test('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add()
  }

  expect(resultFn).toThrow();

})

test('should throw an error if provided with multiple arguments', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2)
  }

  expect(resultFn).toThrow(/iterable/);
})