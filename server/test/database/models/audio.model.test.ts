import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

describe("Test Audio DB Model", () => {
  const created_at = new Date();

  test("Add entry to Audio DB Model", async () => {
    mockCtx.prisma.audio.create.mockResolvedValueOnce({
      id: 1,
      alt: "test",
      path: "test",
      length: 1,
      post_id: 1,
      reactions_id: 1,
      created_at: created_at,
    });
    const result = await ctx.prisma.audio.create({
      data: {
        alt: "test",
        path: "test",
        post_id: 1,
        reactions_id: 1,
        length: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
  });
  test("Get entry from Audio DB Model", async () => {
    mockCtx.prisma.audio.findUnique.mockResolvedValueOnce({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
    const result = await ctx.prisma.audio.findUnique({
      where: {
        id: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
  });
  test("Update entry in Audio DB Model", async () => {
    mockCtx.prisma.audio.update.mockResolvedValueOnce({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
    const result = await ctx.prisma.audio.update({
      where: {
        id: 1,
      },
      data: {
        alt: "test",
        path: "test",
        length: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
  });
  test("Delete entry from Audio DB Model", async () => {
    mockCtx.prisma.audio.delete.mockResolvedValueOnce({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
    const result = await ctx.prisma.audio.delete({
      where: {
        id: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      path: "test",
      post_id: 1,
      reactions_id: 1,
      length: 1,
      created_at: created_at,
    });
  });
});
