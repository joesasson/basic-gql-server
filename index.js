require('dotenv').config()
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from './schema'
import resolvers from './resolvers'
import models from './models'

const app = express()
const PORT = 3000

let context = {
  models
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
  console.log("Server listening")
  console.log(`http://localhost:${PORT}/graphql`)
})

export default app
