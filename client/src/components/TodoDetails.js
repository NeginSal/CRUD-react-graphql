import { useQuery } from "@apollo/client";
import { GET_TODO } from "../query/TodoQueries";
import { useParams } from "react-router-dom";

const TodoDetails = () => {

  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_TODO, {
    variables: { id }
  });

  if (loading) return <p>Loading ... </p>
  if (error) return <p>Something went wrong!</p>

  return (
    <div>
      {data.todo.title}
    </div>
  );
}

export default TodoDetails;