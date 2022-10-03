import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

describe("Test Image Prisma Model", () => {
  const src = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    "base64"
  );

  const image = {
    id: 1,
    user_id: 1,
    alt: "image" + Math.random(),
    src,
    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to Image DB Model", async () => {
    mockCtx.prisma.image.create.mockResolvedValueOnce(image);
    const result = await ctx.prisma.image.create({
      data: {
        user_id: image.user_id,
        alt: image.alt,
        src: image.src,
      },
    });
    expect(result).toEqual(image);
  });
  test("Get entry from Image DB Model", async () => {
    mockCtx.prisma.image.findUnique.mockResolvedValueOnce(image);
    const result = await ctx.prisma.image.findUnique({
      where: {
        user_id: image.user_id,
      },
    });
    expect(result).toEqual(image);
  });
  test("Update entry in Image DB Model", async () => {
    mockCtx.prisma.image.update.mockResolvedValueOnce(image);
    const result = await ctx.prisma.image.update({
      where: {
        user_id: image.user_id,
      },
      data: {
        alt: image.alt,
        src: image.src,
      },
    });
    expect(result).toEqual(image);
  });
  test("Delete entry from Image DB Model", async () => {
    mockCtx.prisma.image.delete.mockResolvedValueOnce(image);
    const result = await ctx.prisma.image.delete({
      where: {
        user_id: image.user_id,
      },
    });
    expect(result).toEqual(image);
  });
});
