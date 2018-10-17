import { gql } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date';

export default gql`

  type Organization {
    _id: ID!,
    name: String!,
    createdAt: GraphQLDateTime!,
    updatedAt: GraphQLDateTime!,
    locations: [Location],
    events: [Event],
  }

  extend type Query {
    organization(_id: ID!): Organization!,
    organizations: [Organization!],
  }

  extend type Mutation {
    createOrganization(
      name: String!,
      createdAt: GraphQLDateTime!,
      updatedAt: GraphQLDateTime!,
    ): Organization!,
    updateOrganization(
      _id: ID!
      name: String,
      createdAt: GraphQLDateTime,
      updatedAt: GraphQLDateTime,
    ): Organization!,
    deleteOrganization(
      _id: ID!
    ): Boolean!
  }
`
