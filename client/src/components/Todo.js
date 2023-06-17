const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default Todo;
