import { gql } from '@apollo/client';

const ADD_TODO = gql`
  mutation addTodo($title:String!){
     addTodo(title:$title){
     id 
     title
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id:ID!) {
    deleteTodo(id:$id){
      id
      title
    }
  }
`;

export { ADD_TODO, DELETE_TODO }