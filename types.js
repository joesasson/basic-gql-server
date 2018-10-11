import { gql } from 'apollo-server-express'

export default gql`
  type Location {
    _id: String!
    name: String!
    address:  String!
    latitude: Float!
    longitude: Float!
    createdAt: Int!
    updatedAt: Int!,
    organization: Organization!
  }

  type Organization {
    name: String!,
    createdAt: Int!,
    updatedAt: Int!,
    locations: [Location],
    events: [Event]
  }

  type Event {
    name: String!,
    date: Int!,
    time: Int!,
    description: String!,
    createdAt: Int!,
    updatedAt: Int!,
    organization: Organization!
  }

  type Query {
    allLocations: [Location!]
  }

  type Mutation {
    createLocation(name: String!, address: String, latitude: Float
    longitude: Float
    createdAt: Int
    updatedAt: Int): Location!
  }
`
