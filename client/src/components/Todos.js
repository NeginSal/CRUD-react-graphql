import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../query/TodoQueries';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const Todos = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <p>Loading ... </p>
  if (error) return <p>Something went wrong!</p>

  return (
    <>
      {!loading && !error && (
        <div>
          {data.todos.map(todo => (
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              <Todo todo={todo} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Todos;