import Todos from './Todos'
import AddTodo from './AddTodo';

const Home = () => {
  return (
    <>
      <blockquote className="text-2xl font-semibold italic text-center text-blue-500 my-10">
        <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-400 relative inline-block">
          <span className="relative text-white "> CRUD App </span>
        </span>
        with React Hooks
      </blockquote>
      <div>
        <Todos />
        <AddTodo />
      </div>
    </>

  );
}

export default Home;
