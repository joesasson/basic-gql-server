## Econify Coding Challenge

### Main objectives

- CRUD Graphql API written in node
- Models are locations, events, and organizations
- locations and events belong to organizations
- organizations have many locations and events
- Schema:

  Organization
  - Name
  - CreatedAt
  - UpdatedAt

  Locations (belongs to Organization):
  - Name
  - Address
  - Latitude
  - Longitude
  - CreatedAt
  - UpdatedAt

  Events (belongs to Organization):
  - Name
  - Date / Time (can modify these columns to fit your needs better.
  Doesn’t have to be exactly one column)
  - Description
  - CreatedAt
  - UpdatedAt

- Bonus: Get geolocation from google maps api when user submits location

### Running Notes

- First learn about setting up a basic node server and how to model domains with node
- Learn how to build a database (with mongo/mongoose)
- wire up graphql endpoint with db
- Graphql Middleware
- Mutations
- Schema
- Resolver
- buildSchema
- root resolver
- query variables
- fragment
- type query
- mongo atlas
- https://www.youtube.com/watch?v=291i04TfGb0
- dotenv
- Scalar - A scalar variable, or scalar field, is a variable that holds one value at a time.
- I'm gonna do nodemon, babel, apollo-server, mongoose, graphql, graphql-tools, body-parser, and express
- My next mission is to get the root query type working
- Just so that I can summarize what I know so far:
- The node app is an instance of express with a middleware for graphql
- The schema describes the graphql fields that are available
- It uses types to describe the data
- A query is a way of getting data from gql (GET)
- A mutation is a way of adding or changing data in gql (POST, PUT, DELETE)
- The
