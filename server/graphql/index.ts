import { graphqlHTTP } from "koa-graphql";
import { schema } from "./schema";

const gqlHttp = graphqlHTTP({
  schema,
  graphiql: true,
});

export default gqlHttp;
