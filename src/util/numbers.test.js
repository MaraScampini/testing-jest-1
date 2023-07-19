import { expect, test } from "vitest";
import { transformToNumber } from "./numbers";

test("should yield the transformed number", () => {
  const string = "2";
  const expected = 2;
  const result = transformToNumber(string);
  expect(result).toBe(expected);
});

test("should yield a numeric type", () => {
  const string = "2";
  const result = transformToNumber(string);
  // Ojo, NaN es de tipo number
  expect(result).toBeTypeOf("number"); 
});

test("should yield NaN if a non-numeric string is used", () => {
  const input = "hello";
  const input2 = {};
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
