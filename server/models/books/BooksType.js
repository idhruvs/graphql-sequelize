import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
    GraphQLBoolean
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a Book',
    fields: () => {
        return {
            id: {type: GraphQLInt},
            name: {type: GraphQLString},
            price: {type: GraphQLFloat},
            description: {type: GraphQLString},
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
