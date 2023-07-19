import { calculateResult } from "./src/math.js";
import { generateResultTest, outputResult } from "./src/output.js";
import { extractNumberInputs } from "./src/parser.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractNumberInputs(form);

  let result = calculateResult(numberValues);

  let resultText = generateResultTest(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
