import React from "react";
import "./Calculator.css";
import { useState } from "react";
const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  function numberPressed(parametr) {
    if (operator === "" || operator === "+/-") {
      setNumber1(Number(number1 + parametr.target.innerHTML));
    } else {
      setNumber2(Number(number2 + parametr.target.innerHTML));
    }
  }
  function operatorPressed(parametr) {
    if (parametr.target.innerHTML === "+/-") {
      if (operator === "" || operator === "+/-") {
        setNumber1(number1 * -1);
      } else {
        setNumber2(number2 * -1);
      }
    }
    setOperator(parametr.target.innerHTML);
  }
  function calc() {
    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "x":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number1 / number2);
        break;
      case "%":
        setResult(number1 % number2);
        break;
      default:
        alert("Invalid operator");
    }
  }
  function ac() {
    setNumber1("");
    setNumber2("");
    setOperator("");
    setResult("");
  }
  return (
    <div className="AllCalcBkogs">
      <div className="calc">
        <div className="screen">
          {result === ""
            ? operator === "" || operator === "+/-"
              ? number1
              : number2
            : result}
        </div>
        <div className="AllOrders">
          <div className="order">
            <div className="kletka">
              <button className="calBut" onClick={ac}>
                AC
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                7
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                4
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                1
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                0
              </button>
            </div>
          </div>
          <div className="order">
            <div className="kletka">
              <button className="calBut" onClick={operatorPressed}>
                +/-
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                8
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                5
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                2
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                00
              </button>
            </div>
          </div>
          <div className="order">
            <div className="kletka">
              <button className="calBut" onClick={operatorPressed}>
                %
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                9
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                6
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                3
              </button>
            </div>
            <div className="kletka">
              <button className="calBut" onClick={numberPressed}>
                000
              </button>
            </div>
          </div><div className="order">
            <div className="kletka kletka2">
              <button className="calBut" onClick={operatorPressed}>
                /
              </button>
            </div>
            <div className="kletka kletka2">
              <button className="calBut" onClick={operatorPressed}>
                x
              </button>
            </div>
            <div className="kletka kletka2">
              <button className="calBut" onClick={operatorPressed}>
                +
              </button>
            </div>
            <div className="kletka kletka2">
              <button className="calBut" onClick={operatorPressed}>
                -
              </button>
            </div>
            <div className="kletka kletka2">
              <button className="calBut" onClick={calc}>
                =
              </button>
            </div>
          </div>
        </div>
      </div></div>
  );
};

export default Calculator;

