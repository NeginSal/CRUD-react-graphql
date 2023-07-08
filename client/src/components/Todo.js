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
    <div>
      <Link to={`/todos/${todo.id}`} key={todo.id}>
        <p>{todo.title}</p>
      </Link>

      <button onClick={deleteTodo}>Delete</button>
      <button  onClick={() => navigate(`/edit/${todo.id}`)}>
        Edit
      </button>
     
      {/* <button component={EditTodo} to={`/edit/${todo.id}`}>EDIT</button> */}
      {/* <Link to={`/edit/${todo.id}`} key={todo.id}>
        <button>Edit</button>
      </Link> */}

      {/* <button className={onClick={() => {
        updateTodo({ variables: { id: todo.id } }); */}

        {/* <EditTodo todo={todo}/> */ }
        {/* component={Link} to={`/${data}`} */ }
    </div>
  );
}

export default Todo;
