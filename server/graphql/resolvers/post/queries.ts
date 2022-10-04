import { prisma } from "../../../config/database";

const postQueries = {
  post: async (_: unknown, args: { id: string }) => {
    const { id } = args;
    const post = await prisma.post.findUnique({
      where: {
        post_id: parseInt(id),
      },
    });

    return post;
  },
  posts: async (_: unknown, args: { skip: number; take: number }) => {
    const { skip, take } = args;
    const posts = await prisma.post.findMany({
      skip,
      take,
    });

    return posts;
  },
};

export default postQueries;
