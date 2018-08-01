import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Item',
  description: 'This represents a item',
  fields: () => {
    return {
      id: {type: GraphQLInt},
      name: {type: GraphQLString},
      amount: {type: GraphQLFloat},
      custom_id: {type: GraphQLString},
      updatedAt: {
        type: GraphQLString,
        resolve(item){
          return item.updatedAt.toString();
        }
      },
      hasChanged: {type: GraphQLBoolean},
      createdAt: {
        type: GraphQLString,
        resolve(item){
          return item.createdAt.toString();
        }
      }

    };
  }
});
