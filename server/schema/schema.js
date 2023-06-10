const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

//Mongoose models
const Todo = require('../models/Todo.js')

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
    todos: {
      type: new GraphQLList(TodoType),
      resolve(parent, args) {
        return Todo.find();
      }
    },
    todo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Todo.findById(args.id);
      }
    }
  })
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add todo
    addTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const todo = new Todo({
          title: args.title
        });
        return todo.save();
      }
    },
    // Delete Todo
    deleteTodo: {
      type: TodoType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Todo.findByIdAndRemove(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})