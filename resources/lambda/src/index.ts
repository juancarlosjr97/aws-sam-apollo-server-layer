import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";

/**
 * The Layer is mounted on the `/opt/*` directory on the container running a the Lambda.
 *
 * The `tsconfig.ts` of the lambda depicts the re-map of the layer using the relative to the baseUrl.
 */
import { getTimestamp } from "/opt/layer";

/**
 * GraphQL Type Definition
 */
const typeDefs = `#graphql
  type Query {
    "Timestamp returning Epoch time"
    timestamp: String
  }
`;

/**
 * GraphQL Resolvers
 */
const resolvers = {
  Query: {
    timestamp: () => getTimestamp(),
  },
};

/**
 * Create Apollo Server configuration
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
});

/**
 * Create AWS Lambda handler
 */
export const handler = startServerAndCreateLambdaHandler(server);
