import { gql } from '@apollo/client';

const DELETE_TODO = gql`

  mutation deleteTodo($id:ID!) {
    deleteTodo(id:$id){
      id
      title
    }
  }
`;

export { DELETE_TODO }