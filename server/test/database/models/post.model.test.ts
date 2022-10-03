import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

describe("Test User Prisma Model", () => {
  const post = {
    id: 1,
    title: "post" + Math.random(),
    published: true,
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to Post DB Model", async () => {
    mockCtx.prisma.post.create.mockResolvedValueOnce(post);
    const result = await ctx.prisma.post.create({
      data: {
        title: post.title,
        published: post.published,
        author_id: post.author_id,
      },
    });
    expect(result).toEqual(post);
  });
  test("Get entry from Post DB Model", async () => {
    mockCtx.prisma.post.findUnique.mockResolvedValueOnce(post);
    const result = await ctx.prisma.post.findUnique({
      where: {
        id: post.id,
      },
    });
    expect(result).toEqual(post);
  });
  test("Update entry in Post DB Model", async () => {
    mockCtx.prisma.post.update.mockResolvedValueOnce(post);
    const result = await ctx.prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        title: post.title,
        published: post.published,
      },
    });
    expect(result).toEqual(post);
  });
  test("Delete entry from Post DB Model", async () => {
    mockCtx.prisma.post.delete.mockResolvedValueOnce(post);
    const result = await ctx.prisma.post.delete({
      where: {
        id: post.id,
      },
    });
    expect(result).toEqual(post);
  });
});
