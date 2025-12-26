import { useState } from "react";

// import child components
import NumberButton from "./numberButton";
import OperatorButton from "./operatorButton";

// Calculator component
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  // calculator button values array
  const numeralArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operatorsArray = ["+", "-", "/", "*", "="];

  // concat and set numbers clicked
  function numberClicked(num) {
    if (operator === null) {
      setNum1((prevNum1) => prevNum1 + num);
    } else {
      setNum2((prevNum2) => prevNum2 + num);
    }
  }

  // operator buttons
  function operatorClicked(op) {
    // check if = btn clicked
    if (op === "=") {
      calculateResult();
    } else {
      // set operator
      setOperator(op);
    }
  }

  // calculate result
  function calculateResult() {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result = 0;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b !== 0 ? a / b : "Error";
        break;
      default:
        result = "Error";
    }
    // set result state
    setResult(result);
  }

  // clear display and reset state to ""
  function clearAll() {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  }

  // create rows of buttons
  const firstRow = numeralArray
    .slice(0, 5)
    .map((num, index) => (
      <NumberButton key={index} value={num} numClick={numberClicked} />
    ));
  const secondRow = numeralArray
    .slice(5, 10)
    .map((num, index) => (
      <NumberButton key={index + 5} value={num} numClick={numberClicked} />
    ));
  const operatorRow = operatorsArray.map((op, index) => (
    <OperatorButton key={index} value={op} opClick={operatorClicked} />
  ));

  return (
    <div className="calculator">
      <div className="calc-header">
        <h2>Calculator</h2>
        <p>Exercise 6</p>
      </div>

      <div className="calc-display">
        <div className="calc-numbers">
          <div>First: {num1}</div>
          <div>Second: {num2}</div>
        </div>
        <div className="calc-result">
          <div>Result:</div>
          <div className="result">
            {result || (operator === null ? num1 || "0" : num2 || "0")}
          </div>
        </div>
      </div>

      <div className="calc-buttons">
        <div className="button-row">{firstRow}</div>
        <div className="button-row">{secondRow}</div>
        <div className="button-row">{operatorRow}</div>
        <button className="clear" onClick={clearAll}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;
