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
  
  useEffect(()=>{
    if(data){
      setTitle(data.todo.title || "")
    }
  },[data])


  const [editTodo] = useMutation(EDIT_TODO, {
    variables: { id, title },
    refetchQueries: [{ query: GET_TODOS, variables: { id } }]
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(title);
    navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly'>
          <div className='mb-2'>
            <input
              className='px-3 py-1 rounded-full border border-gray-600'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text" placeholder="Name" />
          </div>
          <div className='mb-2'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
              Edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditTodo;