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

describe("Test Image Prisma Model", () => {
  const image = {
    image_id: 1,
    user_id: 1,
    alt: "image" + Math.random(),
    image_url: "image_url",
    created_at: new Date(),
    updated_at: new Date(),
  };

  test("Add entry to Image DB Model", async () => {
    mockCtx.prisma.profileImage.create.mockResolvedValueOnce(image);
    const result = await ctx.prisma.profileImage.create({
      data: {
        user_id: image.user_id,
        alt: image.alt,
        image_url: image.image_url,
      },
    });
    expect(result).toEqual(image);
  });
  test("Get entry from Image DB Model", async () => {
    mockCtx.prisma.profileImage.findUnique.mockResolvedValueOnce(image);
    const result = await ctx.prisma.profileImage.findUnique({
      where: {
        user_id: image.user_id,
      },
    });
    expect(result).toEqual(image);
  });
  test("Update entry in Image DB Model", async () => {
    mockCtx.prisma.profileImage.update.mockResolvedValueOnce(image);
    const result = await ctx.prisma.profileImage.update({
      where: {
        user_id: image.user_id,
      },
      data: {
        alt: image.alt,
        image_url: image.image_url,
      },
    });
    expect(result).toEqual(image);
  });
  test("Delete entry from Image DB Model", async () => {
    mockCtx.prisma.profileImage.delete.mockResolvedValueOnce(image);
    const result = await ctx.prisma.profileImage.delete({
      where: {
        user_id: image.user_id,
      },
    });
    expect(result).toEqual(image);
  });
});
