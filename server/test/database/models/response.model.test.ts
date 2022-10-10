import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

afterAll(async () => {
  await ctx.prisma.$disconnect();
});

describe("Test Response Prisma Model", () => {
  const response = {
    post_id: 1,
    response_id: 1,
    response_path: "/response/" + Math.random(),
    alt: "response" + Math.random(),
    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to Response DB Model", async () => {
    mockCtx.prisma.response.create.mockResolvedValueOnce(response);
    const result = await ctx.prisma.response.create({
      data: {
        post_id: response.post_id,
        response_id: response.response_id,
        response_path: response.response_path,
        alt: response.alt,
      },
    });
    expect(result).toEqual(response);
  });
  test("Get entry from Response DB Model", async () => {
    mockCtx.prisma.response.findUnique.mockResolvedValueOnce(response);
    const result = await ctx.prisma.response.findUnique({
      where: {
        response_id: response.response_id,
      },
    });
    expect(result).toEqual(response);
  });
  test("Update entry in Response DB Model", async () => {
    mockCtx.prisma.response.update.mockResolvedValueOnce(response);
    const result = await ctx.prisma.response.update({
      where: {
        response_id: response.response_id,
      },
      data: {
        response_path: response.response_path,
        alt: response.alt,
      },
    });
    expect(result).toEqual(response);
  });
  test("Delete entry from Response DB Model", async () => {
    mockCtx.prisma.response.delete.mockResolvedValueOnce(response);
    const result = await ctx.prisma.response.delete({
      where: {
        response_id: response.response_id,
      },
    });
    expect(result).toEqual(response);
  });
});
