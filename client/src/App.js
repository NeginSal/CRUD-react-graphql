import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Todos from './components/Todos'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Todos />
      </div>
    </ApolloProvider>
  );
}

export default App;
