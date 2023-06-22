import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import EditTodo from './components/EditTodo';
import AddTodo from './components/AddTodo';
import TodoDetails from './components/TodoDetails';

const App = () => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            merge(existing, incoming) {
              return incoming
            }
          }
        }
      }
    }
  });
  
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
  })

  return (
    <>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/edit/:id' element={<EditTodo/>} /> */}
          <Route path='/create' element={< AddTodo />} />
          <Route path='/todos/:id' element={<TodoDetails />} />
        </Routes>
      </ApolloProvider>

    </>
  );
}

export default App;