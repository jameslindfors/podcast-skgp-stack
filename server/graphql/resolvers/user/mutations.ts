import { prisma } from "../../../config/database/index";

const userMutations = {
  updateUser: async (
    _: unknown,
    args: {
      id: string;
      input: { username: string; profile_img: string; post_allowed: boolean };
    }
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
