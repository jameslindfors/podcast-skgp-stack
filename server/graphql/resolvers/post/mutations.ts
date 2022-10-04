import { prisma } from "../../../config/database/index";

const postMutations = {
  createPost: async (
    _: unknown,
    args: { input: { author_id: number; title: string; published: boolean } }
  ) => {
    const { input } = args;
    const post = await prisma.post.create({
      data: {
        ...input,
      },
      include: {
        author: true,
      },
    });

    return post;
  },
  updatePost: async (
    _: unknown,
    args: { id: string; input: { title: string; published: boolean } }
  ) => {
    const { id, input } = args;
    const post = await prisma.post.update({
      where: {
        post_id: parseInt(id),
      },
      data: {
        ...input,
      },
    });

    return post;
  },
  deletePost: async (_: unknown, args: { id: string }) => {
    const { id } = args;
    const post = await prisma.post.delete({
      where: {
        post_id: parseInt(id),
      },
    });

    return post;
  },
};

export default postMutations;
