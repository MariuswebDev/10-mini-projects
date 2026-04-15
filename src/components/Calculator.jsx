import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => setInputValue(eval(inputValue));

  const clearInput = () => setInputValue("");

  const deleteInput = () => setInputValue(inputValue.slice(0, -1));

  return (
    <form className="calc" name="calculator">
      <div className="input-container">
        <input className="input-calc" type="text" value={inputValue} />
      </div>
      <div className="buttons">
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => deleteInput()} className="delete">
          ←
        </span>

        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("/")} className="divide">
          %
        </span>

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("*")} className="multiply">
          *
        </span>

        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={() => display("-")} className="minus">
          -
        </span>
        <span onClick={() => display("+")} className="add">
          +
        </span>
      </div>
      <div className="bottom-section">
        <span onClick={() => calculate()} className="equal-sign">
          {" "}
          ={" "}
        </span>
        <span onClick={() => clearInput()} className="clear">
          Clear
        </span>
      </div>
    </form>
  );
};

export default Calculator;
