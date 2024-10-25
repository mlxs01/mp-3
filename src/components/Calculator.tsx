import { useState } from 'react';
import styled from 'styled-components';

// Container style for the main calculator layout
const Container = styled.div`
  max-width: 30vw; 
  margin: 0 auto;
  padding: 1.25rem; 
  border: 0.0625rem solid #ccc; 
  border-radius: 0.5rem; 
  background-color: white;
`;

// Title style for the calculator header
const Title = styled.h2`
  text-align: center;
  color: #333333;
  margin-top: 0;
`;

// Input style for number input fields
const Input = styled.input`
  padding: 0.5rem; 
  margin: 0.25rem; 
  border-radius: 0.25rem; 
  border: 0.0625rem solid #ccc; 
  width: calc(100% - 1rem); 
  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 0.125rem rgba(0, 102, 255, 0.1); 
  }
`;

// ButtonContainer style for aligning calculator buttons in a grid
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem; 
  margin-top: 1rem; 
`;

// Button style for calculator operations
const Button = styled.button`
  padding: 0.5rem 1rem; 
  border-radius: 0.25rem; 
  border: 0.0625rem solid #ccc; 
  background-color: #f4b885;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f07e36;
  }

  &:active {
    transform: translateY(0.0625rem); 
  }
`;

// ClearButton style for the reset button with unique styling
const ClearButton = styled(Button)`
  background-color: maroon;
  color: white;
  border-color: #ccc;

  &:hover {
    background-color: #ff2222;
  }
`;

// Result style for displaying calculation results with dynamic color
const Result = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1rem; 
  padding: 0.5rem; 
  color: ${props => props.color};
`;

// Calculator component with basic arithmetic operations
const Calculator = () => {
  const [firstNum, setFirstNum] = useState(''); // Stores first number input
  const [secondNum, setSecondNum] = useState(''); // Stores second number input
  const [result, setResult] = useState(''); // Stores calculation result
  const [resultColor, setResultColor] = useState('black'); // Sets result text color

  // Function to perform selected arithmetic operation
  const performOperation = (operation: string) => {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    
    // Check for valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      setResultColor('black');
      return;
    }

    // Execute operation based on button clicked
    let calculatedResult;
    switch (operation) {
      case 'add':
        calculatedResult = num1 + num2;
        break;
      case 'subtract':
        calculatedResult = num1 - num2;
        break;
      case 'multiply':
        calculatedResult = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
          setResultColor('black');
          return;
        }
        calculatedResult = num1 / num2;
        break;
      case 'power':
        calculatedResult = Math.pow(num1, num2);
        break;
      default:
        return;
    }

    // Update result display and set color based on value
    setResult(calculatedResult.toString());
    setResultColor(calculatedResult < 0 ? 'red' : 'black');
  };

  // Function to reset inputs and result display
  const reset = () => {
    setFirstNum('');
    setSecondNum('');
    setResult('');
    setResultColor('black');
  };

  // Component rendering
  return (
    <Container>
      <Title>Calculator</Title>
      <div>
        {/* First number input */}
        <Input
          type="number"
          value={firstNum}
          onChange={(e) => setFirstNum(e.target.value)}
          placeholder="Enter first number"
        />
        {/* Second number input */}
        <Input
          type="number"
          value={secondNum}
          onChange={(e) => setSecondNum(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      
      {/* Buttons for each operation */}
      <ButtonContainer>
        <Button onClick={() => performOperation('add')}>+</Button>
        <Button onClick={() => performOperation('subtract')}>-</Button>
        <Button onClick={() => performOperation('multiply')}>×</Button>
        <Button onClick={() => performOperation('divide')}>÷</Button>
        <Button onClick={() => performOperation('power')}>^</Button>
        <ClearButton onClick={reset}>Clear</ClearButton>
      </ButtonContainer>

      {/* Display calculation result */}
      <Result color={resultColor}>
        {result}
      </Result>
    </Container>
  );
};

export default Calculator;
