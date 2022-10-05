import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

describe("Test User Prisma Model", () => {
  const user = {
    id: 1,
    username: "user1",
    hashed_pw: "hashed_pw",
    post_allowed: true,

    current_post: {
      id: 1,
      title: "post" + Math.random(),
      published: true,
      author_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },

    identifier_token: "identifier_token",
    token: [
      {
        id: 1,
        token: "token",
        user_id: 1,
      },
    ],

    followers: [
      {
        id: 1,
        username: "follower" + Math.random(),
        hashed_pw: "hashed_pw",
        post_allowed: true,
      },
    ],
    following: [
      {
        id: 1,
        username: "following" + Math.random(),
        hashed_pw: "hashed_pw",
        post_allowed: true,
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  };

  const user2 = {
    id: 2,
    username: "user2",
    hashed_pw: "hashed_pw",
    post_allowed: true,

    current_post: {
      id: 2,
      title: "post" + Math.random(),
      published: true,
      author_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },

    identifier_token: "identifier_token",
    token: [
      {
        id: 2,
        token: "token",
        user_id: 2,
      },
    ],

    followers: [
      {
        id: 2,
        username: "follower" + Math.random(),
        hashed_pw: "hashed_pw",
        post_allowed: true,
      },
    ],
    following: [
      {
        id: 2,
        username: "following" + Math.random(),
        hashed_pw: "hashed_pw",
        post_allowed: true,
      },
    ],

    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to User DB Model", async () => {
    mockCtx.prisma.user.create.mockResolvedValue(user);
    const result = await ctx.prisma.user.create({
      data: user,

      include: {
        current_post: true,
        token: true,
        followers: true,
        following: true,
      },
    });
    expect(result).toEqual(user);
  });
  test("Get entry from User DB Model", async () => {
    mockCtx.prisma.user.findUnique.mockResolvedValueOnce(user);
    const result = await ctx.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    expect(result).toEqual(user);
  });
  test("Update entry in User DB Model", async () => {
    mockCtx.prisma.user.create.mockResolvedValue(user);
    const result = await ctx.prisma.user.create({
      data: user,
      include: {
        current_post: true,
        token: true,
        followers: true,
        following: true,
      },
    });
    expect(result).toEqual(user);

    mockCtx.prisma.user.update.mockResolvedValue(user2);
    const result2 = await ctx.prisma.user.update({
      where: {
        id: user.id,
      },
      data: user2,
      include: {
        current_post: true,
        token: true,
        followers: true,
        following: true,
      },
    });
    expect(result2).toEqual(user2);
  });
  test("Delete entry from User DB Model", async () => {
    mockCtx.prisma.user.delete.mockResolvedValueOnce(user);
    const result = await ctx.prisma.user.delete({
      where: {
        id: user.id,
      },
    });
    expect(result).toEqual(user);
  });
});
