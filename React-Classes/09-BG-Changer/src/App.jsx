import { useState } from 'react';

function App() {
  const [color, setColor] = useState('aqua');

  return (
    <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
     <h1 className='flex justify-center text-black font-bold pt-36 '>Bg Changer</h1>
      <div className='fixed flex flex-wrap justify-center top-60 inset-x-0 px-2'>
      
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
         
          <button
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('orange')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'orange' }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor('maroon')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'maroon' }}
          >
            Maroon
          </button>
          <button
            onClick={() => setColor('teal')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: 'teal' }}
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
