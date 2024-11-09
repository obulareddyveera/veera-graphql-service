const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define a simple schema
const schema = buildSchema(`
  type Query {
    hello: String
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String
    age: Int
  }
`);

// Define resolvers for the schema
const root = {
  hello: () => "Hello from GraphQL on Vercel!",
  user: ({ id }) => ({
    id,
    name: `User ${id}`,
    age: 25,
  }),
};

// Create an Express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Veera Checker!");
});

app.get("/api", (req, res) => {
  res.json({ message: "This is the API endpoint!" });
});

// Use express-graphql middleware
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enables GraphiQL playground for development
  })
);

// Export the Express app for serverless deployment
module.exports = app;
