import React, { useState } from 'react';



const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center bg-cyan-950  border-blue-600 border-2 border-dotted rounded-2xl'>
      <h1 className='bg-green-400 p-2 m-2 rounded-2xl animate-pulse'>Simple Calculator</h1>
      <div className=' flex bg-white w-auto  flex-row h-10 border-lime-300 p-1 rounded-md  border-2 '>
        <input type="text" value={input} readOnly className=' rounded-lg border-0'
        
         />
         <div>
        <p className='p-1 mb-1 h-7 bg-white rounded-lg '> {result}</p>
           </div>

      </div>
          <div className='m-2 rounded-xl bg-slate-500'>

          <div className='m-1 space-x-2'>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleClear()}>C</button>
        <button onClick={() => handleCalculate()}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>

      <div className='m-1 space-x-2'>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>

      <div className='m-1 space-x-2'>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>

      <div className='m-1 space-x-2'>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
          </div>
      

      

      
    </div>
  );
};

export default Calculator;


// ////https://flexiple.com/react/react-fiber#section1