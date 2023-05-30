import { graphqlHTTP } from 'express-graphql';

const express = require('express');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true

}))


app.listen(5000, 'you are listening to port 5000');