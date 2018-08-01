import {
  GraphQLInt,
  GraphQLString
} from 'graphql';

export default {
  id: {type: GraphQLInt, description: 'SQL ID, unique identifier in SQL Table'},
  authorName: {type: GraphQLString, description: 'The name of the author'},
  authorEmail: {type: GraphQLString, description: 'The email of the author'},
}
