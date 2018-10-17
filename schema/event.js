import { gql } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date';

export default gql`

  type Event {
    _id: ID!,
    name: String!,
    dateTime: GraphQLDateTime!
    description: String!,
    createdAt: GraphQLDateTime!,
    updatedAt: GraphQLDateTime!,
    organization: Organization
  }


  extend type Query {
    event(_id: ID!): Event!,
    events: [Event!],
  }

  extend type Mutation {
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
  }
`
