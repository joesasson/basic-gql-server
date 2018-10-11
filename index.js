import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from './types'
import resolvers from './resolvers'

const app = express()
const PORT = 3000

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
  console.log("Server listening")
  console.log(`http://localhost:${PORT}/graphql`)
})

export default app
