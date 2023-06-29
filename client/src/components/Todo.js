import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../mutaiotion/TodoMutation";
import { GET_TODOS } from "../query/TodoQueries";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
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
    <div>
      <Link to={`/todos/${todo.id}`} key={todo.id}>
        <p>{todo.title}</p>
      </Link>

      <button onClick={deleteTodo}>Delete</button>
      <Link to={`/edit/${todo.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Todo;
