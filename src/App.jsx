import React, { useState } from 'react';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [todo, setTodo] = useState([]);

  const handleData = (e) => {
    e.preventDefault();
    if (inputVal.trim() === '') return; // prevent empty input
    setTodo([...todo, inputVal]);
    setInputVal(''); // clear input after submit
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-200 to-slate-400 p-10 flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>📝 Todo App</h1>

      <form
        onSubmit={handleData}
        className='flex gap-4 items-center w-full max-w-xl'
      >
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className='flex-1 h-[50px] px-4 rounded-md shadow-sm outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all'
          type='text'
          placeholder='Enter todo'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition'
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className='mt-8 w-full max-w-xl bg-white shadow-md rounded-md p-6'>
        {todo.length === 0 ? (
          <p className='text-gray-500 text-center'>No todos added yet.</p>
        ) : (
          <ul className='space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100'>
            {todo.map((item, idx) => (
              <li
                key={idx}
                className='bg-gray-100 px-4 py-3 rounded-md shadow-sm flex items-center justify-between'
              >
                <span className='text-gray-800'>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
