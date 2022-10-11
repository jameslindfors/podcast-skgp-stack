import { prisma } from "../../../config/database";

const refreshTokenQueries = {
  refresh_token: async (_: unknown, args: { user_id: string }) => {
    const { user_id } = args;
    const refreshToken = await prisma.refresh_token.findUnique({
      where: {
        user_id: parseInt(user_id),
      },
    });
    return refreshToken;
  },
};

export default refreshTokenQueries;
