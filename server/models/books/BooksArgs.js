import {
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

export default {
  id: {type: GraphQLInt, description: 'SQL ID, unique identifier in SQL Table'},
  name: {type: GraphQLString, description: 'The name of the book'},
  description: {type: GraphQLString, description: 'The description of the book'},
  price: {type: GraphQLFloat, description: 'The price of the book'},
}
