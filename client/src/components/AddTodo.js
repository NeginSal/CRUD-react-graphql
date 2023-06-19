import React, { useState } from 'react';


const AddTodo = () => {
  const [todo, setTodo] = useState("")

  return (
    <form >
      <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly'>
        <div className='mb-2'>
          <input
            className='px-3 py-1 rounded-full border border-gray-600'
            value={todo} onChange={(e) => setTodo(e.target.value)} required
            type="text" placeholder="Name" />
        </div>
        <div className='mb-2'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
            Add
          </button>
        </div>
      </div>
    </form>


  );
}

export default AddTodo;