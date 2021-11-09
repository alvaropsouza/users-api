import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/type-defs.js';
import resolvers from './schema/resolvers.js';
import { ApolloServerPluginCacheControl } from 'apollo-server-core';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(3333).then(({url}) => {
    console.log(`Your api is running :) on ${url}`);
})
