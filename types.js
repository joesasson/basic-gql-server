import { gql } from 'apollo-server-express'

export default gql`
  type Location {
    _id: String
    name: String!
    address:  String
    latitude: Float
    longitude: Float
    createdAt: Int
    updatedAt: Int
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
