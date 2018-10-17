import { gql } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date';

export default gql`

  type Location {
    _id: ID!,
    name: String!
    address:  String!
    latitude: Float!
    longitude: Float!
    createdAt: GraphQLDateTime!
    updatedAt: GraphQLDateTime!,
    organization: Organization!,
  }

  extend type Query {
    location(_id: ID!): Location!,
    locations: [Location!],
  }

  extend type Mutation {
    createLocation(
      name: String!
      address: String!
      latitude: Float
      longitude: Float
      createdAt: GraphQLDateTime
      updatedAt: GraphQLDateTime
      organizationId: ID!
    ): Location!,
    updateLocation(_id: ID!,
      name: String,
      address: String,
      latitude: Float
      longitude: Float
      createdAt: GraphQLDateTime
      updatedAt: GraphQLDateTime
      organizationId: ID
    ): Location!,
    deleteLocation(_id: ID!): Boolean!,
  }
`
