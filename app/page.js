import React from "react";
import { useState } from "react";
import "./page.css";
const Page = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleInputChange = (e) => {
    setExpression(e.target.value);
  };

  const calculateResult = () => {
    try {
      const sanitizedExpression = expression
        .replace(/sqrt/g, "Math.sqrt")
        .replace(/log/g, "Math.log")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan");

      const calcResult = eval(sanitizedExpression);
      setResult(calcResult);
    } catch {
      setResult("Error: Invalid expression.");
    }
  };

  const appendToExpression = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearAll = () => {
    setExpression("");
    setResult("");
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <div className="screen">
        <div className="expression">{expression}</div>
        <div className="result">{result}</div>
      </div>
      <div className="button-container">
        {["7", "8", "9", "/", "sin"].map((item) => (
          <button
            key={item}
            className="button"
            onClick={() => appendToExpression(item)}
          >
            {item}
          </button>
        ))}
        {["4", "5", "6", "*", "cos"].map((item) => (
          <button
            key={item}
            className="button"
            onClick={() => appendToExpression(item)}
          >
            {item}
          </button>
        ))}
        {["1", "2", "3", "-", "tan"].map((item) => (
          <button
            key={item}
            className="button"
            onClick={() => appendToExpression(item)}
          >
            {item}
          </button>
        ))}
        {["0", ".", "(", ")", "+"].map((item) => (
          <button
            key={item}
            className="button"
            onClick={() => appendToExpression(item)}
          >
            {item}
          </button>
        ))}
        <button className="button" onClick={() => appendToExpression("sqrt(")}>
          √
        </button>
        <button className="button" onClick={clearAll}>
          C
        </button>
        <button className="action-button" onClick={calculateResult}>
          =
        </button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Page;
