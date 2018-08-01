import {
    GraphQLObjectType,
    GraphQLList
} from 'graphql';

import { ItemModel, ItemType, ItemArgs } from './models/items';
import { BooksModel, BooksType, BooksArgs } from './models/books';

export default new GraphQLObjectType({
    name: 'Root Query',
    description: 'The root query contains multiple queries for the different models defined in the schema.',
    fields: () => {
        return {
            items: {
                type: new GraphQLList(ItemType),
                args: ItemArgs,
                resolve(root, args) {
                    const opts = { where: args };
                    return ItemModel.findAll(opts);
                }
            },
            books: {
                type: new GraphQLList(BooksType),
                args: BooksArgs,
                resolve(root, args) {
                    const opts = { where: args };
                    return BooksModel.findAll(opts);
                }
            }
        }
    }
});
