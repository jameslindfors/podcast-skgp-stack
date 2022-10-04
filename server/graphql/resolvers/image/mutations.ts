import { prisma } from "../../../config/database";

const imageMutations = {
  uploadProfileImage: async (
    _: unknown,
    args: {
      user_id: string;
      input: { alt: string; data: Buffer };
    }
  ) => {
    const { user_id, input } = args;
    const user = await prisma.user.update({
      where: { id: parseInt(user_id) },
      data: {
        profile_img: {
          create: {
            ...input,
          },
        },
      },
    });
    return user;
  },
};

export default imageMutations;
