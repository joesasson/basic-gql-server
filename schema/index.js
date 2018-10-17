import { gql } from 'apollo-server-express'
import { GraphQLDateTime } from 'graphql-iso-date';
import eventSchema from './event'
import locationSchema from './location'
import organizationSchema from './organization'

const linkSchema = gql`

  scalar GraphQLDateTime

  type Query {
    _: Boolean!
  }

  type Mutation {
    _: Boolean!
  }
`

export default [linkSchema, eventSchema, locationSchema, organizationSchema]
