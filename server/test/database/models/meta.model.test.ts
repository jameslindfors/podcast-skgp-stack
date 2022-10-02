import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

describe("Test Meta DB Model", () => {
  const created_at = new Date();
  const updated_at = new Date();
  test("Add entry to Meta DB Model", async () => {
    mockCtx.prisma.meta.create.mockResolvedValueOnce({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
    const result = await ctx.prisma.meta.create({
      data: {
        key: "test",
        value: "test",
      },
    });
    expect(result).toEqual({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
  });
  test("Get entry from Meta DB Model", async () => {
    mockCtx.prisma.meta.findUnique.mockResolvedValueOnce({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
    const result = await ctx.prisma.meta.findUnique({
      where: {
        key: "test",
      },
    });
    expect(result).toEqual({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
  });
  test("Update entry in Meta DB Model", async () => {
    mockCtx.prisma.meta.update.mockResolvedValueOnce({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
    const result = await ctx.prisma.meta.update({
      where: {
        key: "test",
      },
      data: {
        value: "test",
      },
    });
    expect(result).toEqual({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
  });
  test("Delete entry from Meta DB Model", async () => {
    mockCtx.prisma.meta.delete.mockResolvedValueOnce({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
    const result = await ctx.prisma.meta.delete({
      where: {
        key: "test",
      },
    });
    expect(result).toEqual({
      id: 1,
      key: "test",
      value: "test",
      createdAt: created_at,
      updatedAt: updated_at,
    });
  });
});
