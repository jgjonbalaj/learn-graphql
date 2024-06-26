import gql from 'graphql-tag';

export const typeDefs = gql `
  type Test {
    id: Int!
  }
  
  type Query {
    test: Test!
  }
`;

export const resolvers = {
  Query: {
    test: () => ({ id: 1 }),
  }
}
