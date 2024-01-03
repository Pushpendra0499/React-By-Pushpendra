import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
    
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  const resetValue = () => {
     setCounter(0)
  }
  
  return (
    <>
      <h1>Pushpendra Kumar</h1>
      <h2 className='bg-green-400'>practice Box: {counter}</h2>

      <button
            className='border-1 animate-pulse bg-orange-400 p-2 m-2 border-black'

      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      className='border-1 animate-pulse bg-orange-400 p-2 m-2 border-black'
      onClick={removeValue}
      >Remove value {counter}</button>
      <p className='bg-green-400'>Practice Box: {counter}</p>
      <br/>

      <button
      className='border-1 bg-yellow-500 text-black font-bold p-2 m-2 border-black'
      onClick={resetValue}
      >Set Value</button>
      
    </>
  )
}

export default App