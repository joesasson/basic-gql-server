import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import typeDefs from './schema'
import resolvers from './resolvers'

const app = express()
const PORT = 3000

let context = {
  
}

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
