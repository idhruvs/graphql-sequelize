import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import { ItemModel, ItemType, ItemArgs } from './models/items';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'This is our Item query',
  fields: () => {
    return {
      items: {
        type: new GraphQLList(ItemType),
        args: ItemArgs,
        resolve(root, args) {
          const opts = { where: args };
          return ItemModel.findAll(opts);
        }
      }
    }
  }
});
