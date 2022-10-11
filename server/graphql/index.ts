import { graphqlHTTP } from "koa-graphql";
import { schema } from "./schema";
import { env } from "../config/environment";

const gqlHttp = graphqlHTTP({
  schema,
  graphiql: env.development,
});

export default gqlHttp;
