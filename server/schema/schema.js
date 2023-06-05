const { todos } = require('../data.js');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql');

//todos Typeo
const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString }
  })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    todos:{
      type:new GraphQLList(TodoType),
        resolve(parent,args){
          return todos
        }
    },
    todo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return todos.find(todo => todo.id === args.id);
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
})