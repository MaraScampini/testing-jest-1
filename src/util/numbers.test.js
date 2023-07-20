import { describe, expect, it, test } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  // This would be an integration test, because cleanNumbers calls two other functions
  it("should return an array of number values if an array of string numbers is provided", () => {
    const numberValues = ["1", "2"];
    const cleanedNumbers = cleanNumbers(numberValues);
    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1,2])
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow(/Invalid/);
  });
});
