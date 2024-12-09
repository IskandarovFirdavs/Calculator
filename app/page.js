"use client";

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "#f3f4f6",
  text: "#1f2937",
  buttonBg: "#10b981",
  buttonHover: "#059669",
  border: "#d1d5db",
};

const darkTheme = {
  background: "#1f2937",
  text: "#f3f4f6",
  buttonBg: "#374151",
  buttonHover: "#4b5563",
  border: "#4b5563",
};

export default function Calculator() {
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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Screen>
          <Expression>{expression}</Expression>
          <Result>{result}</Result>
        </Screen>
        <ButtonContainer>
          {["7", "8", "9", "/", "sin"].map((item) => (
            <Button key={item} onClick={() => appendToExpression(item)}>
              {item}
            </Button>
          ))}
          {["4", "5", "6", "*", "cos"].map((item) => (
            <Button key={item} onClick={() => appendToExpression(item)}>
              {item}
            </Button>
          ))}
          {["1", "2", "3", "-", "tan"].map((item) => (
            <Button key={item} onClick={() => appendToExpression(item)}>
              {item}
            </Button>
          ))}
          {["0", ".", "(", ")", "+"].map((item) => (
            <Button key={item} onClick={() => appendToExpression(item)}>
              {item}
            </Button>
          ))}
          <Button onClick={() => appendToExpression("sqrt(")}>√</Button>
          <Button onClick={clearAll}>C</Button>
          <ActionButton onClick={calculateResult}>=</ActionButton>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </ThemeToggle>
        </ButtonContainer>
      </Container>
    </ThemeProvider>
  );
}

// Styles
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const Screen = styled.div`
  background-color: ${(props) => props.theme.border};
  border-radius: 8px;
  padding: 20px;
  text-align: right;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Expression = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`;

const Result = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ActionButton = styled(Button)`
  background-color: #dc2626;

  &:hover {
    background-color: #b91c1c;
  }
`;

const ThemeToggle = styled(Button)`
  margin-top: 20px;
  grid-column: span 5;
  font-weight: bold;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
`;
