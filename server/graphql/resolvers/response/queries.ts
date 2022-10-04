import { prisma } from "../../../config/database";

const responseQueries = {
  responses: async (_: unknown, args: { post_id: string }) => {
    const { post_id } = args;
    const responses = await prisma.response.findMany({
      where: {
        post_id: parseInt(post_id),
      },
    });
    return responses;
  },
};

export default responseQueries;
