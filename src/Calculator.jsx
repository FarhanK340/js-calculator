import React, { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('0');
    const [expression, setExpression] = useState('');
    const [operator, setOperator] = useState(null);
    const [overwrite, setOverwrite] = useState(false);
  
    const handleNumberClick = (number) => {
      if (overwrite) {
        setInput(number);
        setOverwrite(false);
        setExpression(number);
      } else {
        if (input === '0') {
          if (number !== '0') {
            setInput(number);
            setExpression(prev => prev + number);
          }
        } else {
          setInput(input + number);
          setExpression(prev => prev + number);
        }
      }
    };
  
    const handleOperatorClick = (operator) => {
      if (overwrite) {
        setExpression(input + operator);
        setInput(operator);
        setOverwrite(false);
      } else {
        if (/[\+\-\*/]$/.test(expression.slice(-1))) {
          if (operator === '-') {
            setExpression(expression + operator);
          } else {
            setExpression(expression.replace(/[\+\-\*/]+$/, operator));
          }
        } else {
          setExpression(expression + operator);
        }
      }
      setInput('');
    };
  
    const handleEqualClick = () => {
      if (expression) {
        const result = eval(expression);
        setInput(String(result));
        setExpression(String(result));
        setOperator(null);
        setOverwrite(true);
      }
    };
  
    const handleClearClick = () => {
      setInput('0');
      setExpression('');
      setOperator(null);
      setOverwrite(false);
    };
  
    const handleDecimalClick = () => {
      if (!input.includes('.')) {
        setInput(input + '.');
        setExpression(prev => prev + '.');
      }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl  shadow-gray-950">
                <div id="display" className="bg-calculator-display-bg text-white text-right p-5 rounded-lg mb-5 text-2xl m-1 xl">{expression || input}</div>
                <div className="grid grid-cols-4 gap-2">
                    <button id="clear" className="col-span-2 p-5 text-2xl m-1  bg-red-600 hover:bg-red-700 text-white py-2 rounded shadow-md shadow-black active:bg-red-500 active:shadow-red-300 active:shadow-md" onClick={handleClearClick}>AC</button>
                    <button id="divide" className=" p-5 text-2xl m-1 bg-orange-400 hover:bg-orange-600 text-white py-2 rounded shadow-md shadow-black active:bg-orange-500 active:shadow-orange-300 active:shadow-md" onClick={() => handleOperatorClick('/')}>/</button>
                    <button id="multiply" className=" p-5 text-2xl m-1 bg-orange-400 hover:bg-orange-600 text-white py-2 rounded shadow-md shadow-black active:bg-orange-500 active:shadow-orange-300 active:shadow-md" onClick={() => handleOperatorClick('*')}>*</button>
                    <button id="seven" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('7')}>7</button>
                    <button id="eight" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('8')}>8</button>
                    <button id="nine" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('9')}>9</button>
                    <button id="subtract" className=" p-5 text-2xl m-1 bg-orange-400 hover:bg-orange-600 text-white py-2 rounded shadow-md shadow-black active:bg-orange-500 active:shadow-orange-300 active:shadow-md" onClick={() => handleOperatorClick('-')}>-</button>
                    <button id="four" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('4')}>4</button>
                    <button id="five" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('5')}>5</button>
                    <button id="six" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('6')}>6</button>
                    <button id="add" className=" p-5 text-2xl m-1 bg-orange-400 hover:bg-orange-600 text-white py-2 rounded shadow-md shadow-black active:bg-orange-500 active:shadow-orange-300 active:shadow-md" onClick={() => handleOperatorClick('+')}>+</button>
                    <button id="one" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('1')}>1</button>
                    <button id="two" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('2')}>2</button>
                    <button id="three" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('3')}>3</button>
                    <button id="equals" className="row-span-2  p-5 text-2xl m-1 bg-blue-400 hover:bg-blue-500 text-white py-2 rounded shadow-md shadow-black active:bg-blue-500 active:shadow-blue-300 active:shadow-md" onClick={handleEqualClick}>=</button>
                    <button id="zero" className="col-span-2  p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={() => handleNumberClick('0')}>0</button>
                    <button id="decimal" className=" p-5 text-2xl m-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded shadow-md shadow-black active:bg-gray-500 active:shadow-gray-300 active:shadow-md" onClick={handleDecimalClick}>.</button>
                </div>
            </div>
        </div>
    );
};

export default App;
