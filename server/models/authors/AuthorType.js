import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';


export default new GraphQLObjectType({
    name: 'Author',
    description: 'This represents an Author',
    fields: () => {
        return {
            id: {type: GraphQLInt},
            authorName: {type: GraphQLString},
            authorEmail: {type: GraphQLString},
            updatedAt: {
                type: GraphQLString,
                resolve(item){
                    return item.updatedAt.toString();
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(item){
                    return item.createdAt.toString();
                }
            }
        };
    }
});
