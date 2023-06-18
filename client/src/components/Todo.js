import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../mutaiotion/TodoMutation";
import { GET_TODOS } from "../query/TodoQueries";

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
      <p>{todo.title}</p>
      <button onClick={deleteTodo}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default Todo;
