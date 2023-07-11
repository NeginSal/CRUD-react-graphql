import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../mutaiotion/TodoMutation";
import { GET_TODOS } from "../query/TodoQueries";
import { Link, useNavigate } from "react-router-dom";


const Todo = ({ todo }) => {

  const navigate = useNavigate();
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { id: todo.id },
    update(cache, { data: { deleteTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.filter(todo => todo.id !== deleteTodo.id) }
      })
    }
  });

  return (
    <div className='flex justify-between border-b-4'>
      <div className="my-3">
        <Link to={`/todos/${todo.id}`} key={todo.id}>
          {todo.title}
        </Link>
      </div>
      <div>
        <button
          className='my-3 px-2 py-1 text-red-800 
         hover:bg-red-400 hover:rounded-md hover:border hover:border-red-800'
          onClick={deleteTodo}>Delete</button>
        <button
          className='mx-2 my-3 px-2 py-1 text-green-800
         hover:bg-green-400 hover:rounded-md hover:border hover:border-green-800'
          onClick={() => navigate(`/edit/${todo.id}`)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Todo;
