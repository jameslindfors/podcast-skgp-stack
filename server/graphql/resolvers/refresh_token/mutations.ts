import { prisma } from "../../../config/database";

const refreshTokenMutations = {
  refresh_token: async (
    _: unknown,
    args: { user_id: string; refresh_token: string }
  ) => {
    const { user_id, refresh_token } = args;
    const refreshToken = await prisma.refresh_token.update({
      where: {
        user_id: parseInt(user_id),
      },
      data: {
        refresh_token,
      },
    });
    return refreshToken;
  },
};

export default refreshTokenMutations;
