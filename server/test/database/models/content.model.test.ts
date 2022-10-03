import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

describe("Test Content Prisma Model", () => {
  const content = {
    post_id: 1,
    content_id: 1,
    content_path: "/content/" + Math.random(),
    alt: "content" + Math.random(),
    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to Content DB Model", async () => {
    mockCtx.prisma.content.create.mockResolvedValueOnce(content);
    const result = await ctx.prisma.content.create({
      data: {
        post_id: content.post_id,
        content_id: content.content_id,
        content_path: content.content_path,
        alt: content.alt,
      },
    });
    expect(result).toEqual(content);
  });
  test("Get entry from Content DB Model", async () => {
    mockCtx.prisma.content.findUnique.mockResolvedValueOnce(content);
    const result = await ctx.prisma.content.findUnique({
      where: {
        post_id: content.post_id,
      },
    });
    expect(result).toEqual(content);
  });
  test("Update entry in Content DB Model", async () => {
    mockCtx.prisma.content.update.mockResolvedValueOnce(content);
    const result = await ctx.prisma.content.update({
      where: {
        post_id: content.post_id,
      },
      data: {
        content_path: content.content_path,
        alt: content.alt,
      },
    });
    expect(result).toEqual(content);
  });
  test("Delete entry from Content DB Model", async () => {
    mockCtx.prisma.content.delete.mockResolvedValueOnce(content);
    const result = await ctx.prisma.content.delete({
      where: {
        post_id: content.post_id,
      },
    });
    expect(result).toEqual(content);
  });
});
