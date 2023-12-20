import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { MockList } from '@graphql-tools/mock';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        interests: [Interest]
        commonInterests: [Interest]
    }

    type Interest {
        id: ID!
        name: String!
        subscribers: [User]
    }

    type Query {
        users: [User]
        interests: [Interest]
    }
`;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {};

const mocks = {
    Query: () => ({
        users: () => new MockList([5, 10]),
        interests: () => new MockList([5, 10]),
    }),
    User: () => ({
        id: () => 'userid_' + Math.floor(Math.random()*1000),
        username: () => 'User_' + Math.floor(Math.random()*1000),
        interests: () => new MockList([3, 7]),
        commonInterests: () => new MockList([1, 2]),
    }),
    Interest: () => ({
        id: () => 'interestid_' + Math.floor(Math.random()*1000),
        name: () => 'Interest_' + Math.floor(Math.random()*1000),
        subscribers: () => new MockList([3, 7]),
    }),
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// Server
const server = new ApolloServer({
    typeDefs,
    resolvers: {},
    mocks,
});

async function startApolloServer() {
    // Please wait for the server to start before applying middleware
    await server.start();
    const app = express();
    // Apply the Apollo GraphQL middleware to our Express.js app
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
}

// call the function to start Apollo Server
startApolloServer();