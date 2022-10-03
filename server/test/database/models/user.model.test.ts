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
    username: "user" + Math.random(),
    post_allowed: true,

    current_post: {
      id: 1,
      title: "post" + Math.random(),
      published: true,
      author_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },

    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to User DB Model", async () => {
    mockCtx.prisma.user.create.mockResolvedValueOnce(user);
    const result = await ctx.prisma.user.create({
      data: {
        username: user.username,
        post_allowed: user.post_allowed,
        current_post: {
          connect: {
            id: user.current_post.id,
          },
        },
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
    mockCtx.prisma.user.update.mockResolvedValueOnce(user);
    const result = await ctx.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        username: user.username,
        post_allowed: user.post_allowed,
        current_post: {
          connect: {
            id: user.current_post.id,
          },
        },
      },
    });
    expect(result).toEqual(user);
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
