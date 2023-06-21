import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Todos from './Todos'
import AddTodo from './AddTodo';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Todos />
        <AddTodo />
      </div>
    </ApolloProvider>
  );
}

export default Home;
