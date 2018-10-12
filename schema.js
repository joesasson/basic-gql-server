import { gql } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date';

export default gql`

  scalar GraphQLDateTime

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

  type Organization {
    _id: ID!,
    name: String!,
    createdAt: GraphQLDateTime!,
    updatedAt: GraphQLDateTime!,
    locations: [Location],
    events: [Event],
  }

  type Event {
    _id: ID!,
    name: String!,
    dateTime: GraphQLDateTime!
    description: String!,
    createdAt: GraphQLDateTime!,
    updatedAt: GraphQLDateTime!,
    organization: Organization
  }

  type Query {
    event(_id: ID!): Event!,
    location(_id: ID!): Location!,
    organization(_id: ID!): Organization!,
    events: [Event!],
    locations: [Location!],
    organizations: [Organization!],
  }

  type Mutation {
    createEvent(
      name: String!,
      dateTime: GraphQLDateTime!,
      description: String!,
      createdAt: GraphQLDateTime!,
      updatedAt: GraphQLDateTime!,
      organizationId: ID!
    ): Event!,
    updateEvent(
      _id: ID!
      name: String,
      dateTime: GraphQLDateTime,
      description: String,
      createdAt: GraphQLDateTime,
      updatedAt: GraphQLDateTime,
      organizationId: ID
    ): Event!,
    deleteEvent(_id: ID!): Boolean!
    createLocation(
      name: String!,
      address: String!,
      latitude: Float
      longitude: Float
      createdAt: GraphQLDateTime
      updatedAt: GraphQLDateTime
      organizationId: ID!
    ): Location!,
    createOrganization(
      name: String!,
      createdAt: GraphQLDateTime!,
      updatedAt: GraphQLDateTime!,
    ): Organization!
  }
`
