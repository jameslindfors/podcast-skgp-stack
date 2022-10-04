import { userQueries, userMutations } from "./user";
import { postQueries, postMutations } from "./post";
import { imageMutations } from "./image";
import { responseQueries, responseMutations } from "./response";
import { refreshTokenQueries, refreshTokenMutations } from "./refresh_token";

const resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
    ...responseQueries,
    ...refreshTokenQueries,
  },
  Mutation: {
    ...userMutations,
    ...postMutations,
    ...imageMutations,
    ...responseMutations,
    ...refreshTokenMutations,
  },
};

export default resolvers;
