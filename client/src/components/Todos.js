import { gql, useQuery } from '@apollo/client';
import Todo from './Todo'

const GET_TODOS = gql`
 query getTodos {
   todos{
     id
     title
    }
  }
`;

const Todos = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <p>Loading ... </p>
  if (error) return <p>Something went wrong!</p>

  return (
    <>
      {!loading && !error && (
        <div>
          {data.todos.map(todo => (<Todo key={todo.id} todo={todo} />))}
        </div>
      )}
      {/* {!loading && !error && (
        <div>
          {data.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      )} */}
    </>
  );
}

export default Todos;