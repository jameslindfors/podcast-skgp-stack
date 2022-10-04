import { prisma } from "../../../config/database/index";

const userMutations = {
  createUser: async (
    _: unknown,
    args: { input: { username: string; hashed_pw: string } }
  ) => {
    const { input } = args;
    const user = await prisma.user.create({
      data: {
        ...input,
      },
    });

    return user;
  },
  updateUser: async (
    _: unknown,
    args: { id: string; input: { username: string; post_allowed: boolean } }
  ) => {
    const { id, input } = args;

    const user = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...input,
      },
    });

    return user;
  },
  deleteUser: async (_: unknown, args: { id: string }) => {
    const { id } = args;
    const user = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    return user;
  },
};

export default userMutations;
