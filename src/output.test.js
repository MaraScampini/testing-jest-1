import { describe, expect, it } from "vitest";
import { generateResultText } from "./output";
describe("generateResultText()", () => {
  it("should return a string no matter the value passed", () => {
    const inputNum = 2;
    const inputStr = "string";
    const inputBool = true;

    const result1 = generateResultText(inputNum);
    const result2 = generateResultText(inputStr);
    const result3 = generateResultText(inputBool);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });
  it("should return an empty string if 'no-calc' is provided as a result", () => {
    const input = "no-calc";
    const resultText = generateResultText(input);
    expect(resultText).toBe("");
  });
  it('should return a string containing the text "Invalid" if "invalid" is provided as a result', () => {
    const input = "invalid";
    const resultText = generateResultText(input);
    expect(resultText).toContain("Invalid");
  });
});
