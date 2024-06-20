import { ApollowServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema.js";

// server setup
const server = new ApollowServer({
  // Type Defs
  typeDefs,
  // Resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log("server ready at https://localhost:4000");
