const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const schema = require('./schema/schema');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

//connect to database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log('now listening for requests on port 5000');
});