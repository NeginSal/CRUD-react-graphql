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

const EDIT_TODO = gql`
  mutation editTodo($id: ID! $title: String!) {
    editTodo(id: $id title: $title) {
      id
      title
    }
  }
`;

export { ADD_TODO, DELETE_TODO, EDIT_TODO }