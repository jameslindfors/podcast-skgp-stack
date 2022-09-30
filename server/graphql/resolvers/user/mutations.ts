import { prisma } from "../../../config/database/index";

const userMutations = {
  createUser: async (
    _: never,
    args: {
      input: { name: string; email: string };
    }
  ) => {
    const { name, email } = args.input;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  },
  deleteUser: async (_: never, args: { id: string }) => {
    const user = await prisma.user.delete({
      where: {
        id: parseInt(args.id),
      },
    });
    return user;
  },
};

export default userMutations;
