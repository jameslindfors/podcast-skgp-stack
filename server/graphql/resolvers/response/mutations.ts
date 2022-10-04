import { prisma } from "../../../config/database";

const responseMutations = {
  addResponseToPost: async (
    _: unknown,
    args: { post_id: string; input: { response_path: string; alt: string } }
  ) => {
    const { post_id, input } = args;
    const response = await prisma.response.create({
      data: {
        post_id: parseInt(post_id),
        ...input,
      },
    });
    return response;
  },
};

export default responseMutations;
