import React, { useState } from 'react';
import { ADD_TODO } from '../mutaiotion/TodoMutation';
import { GET_TODOS } from '../query/TodoQueries'
import { useMutation } from '@apollo/client';


const AddTodo = () => {
  const [title, setTitle] = useState("")

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { title },
    update(cache, { data: { addTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, addTodo] },
      })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addTodo(title);
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly'>
        <div className='mb-2'>
          <input
            className='px-3 py-1 rounded-full border border-gray-600'
            value={title} onChange={(e) => setTitle(e.target.value)} required
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