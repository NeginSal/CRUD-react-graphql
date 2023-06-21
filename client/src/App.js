import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import EditTodo from './components/EditTodo';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <>
      <blockquote className="text-2xl font-semibold italic text-center text-blue-500 my-10">
        <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-400 relative inline-block">
          <span className="relative text-white "> CRUD App </span>
        </span>
        with React Hooks
      </blockquote>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/edit/:id' element={<EditTodo/>} /> */}
        <Route path='/create' element={< AddTodo />} />
      </Routes>
    </>
  );
}

export default App;