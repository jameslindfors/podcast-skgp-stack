import { prisma } from "../../../config/database/index";

const userQueries = {
  user: async (_: unknown, args: { id: string }) => {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(args.id),
      },
    });
    return user;
  },
  users: async () => {
    const users = await prisma.user.findMany({
      include: {},
    });
    return users;
  },
};

export default userQueries;
