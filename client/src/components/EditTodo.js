import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_TODO, GET_TODOS } from "../query/TodoQueries";
import { useNavigate, useParams } from "react-router-dom";
import { EDIT_TODO } from '../mutaiotion/TodoMutation';
import { useMutation } from '@apollo/client';



const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(GET_TODO, {
    variables: { id }
  });
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (data) {
      setTitle(data.todo.title || "")
    }
  }, [data])


  const [editTodo] = useMutation(EDIT_TODO, {
    variables: { id, title },
    refetchQueries: [{ query: GET_TODOS, variables: { id } }]
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(title);
    navigate('/')
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className='bg-slate-100 p-10 mt-10 rounded-md'>
        <div className='flex flex-col items-center sm:flex-row sm:space-x-1 sm:justify-center'>
          <div className='mb-2'>
            <input
              className='my-2 px-5 py-1 rounded-full border border-gray-600'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text" placeholder="Name" />
          </div>
          <div className="flex my-2">
            <button
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'>
              EDIT
            </button>
            <button
              onClick={goHome}
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'>
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditTodo;