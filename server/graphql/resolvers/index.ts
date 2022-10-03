import { userQueries, userMutations } from "./user";
import { postMutations, postQueries } from "./post";

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
  },
  Mutation: {
    ...userMutations,
    ...postMutations,
  },
};

export default resolvers;
