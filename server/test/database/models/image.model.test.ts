import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

/* Image Model
model Image {
    id Int @id @default(autoincrement())
    alt String
    src Bytes
}
*/

describe("Test Image DB Model", () => {
  const src = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    "base64"
  );

  test("Add entry to Image DB Model", async () => {
    mockCtx.prisma.image.create.mockResolvedValueOnce({
      id: 1,
      user_id: 1,
      alt: "test",
      src: src,
    });
    const result = await ctx.prisma.image.create({
      data: {
        alt: "test",
        src: src,
        user_id: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      src: src,
      user_id: 1,
    });
  });
  test("Get entry from Image DB Model", async () => {
    mockCtx.prisma.image.findUnique.mockResolvedValueOnce({
      id: 1,
      user_id: 1,
      alt: "test",
      src: src,
    });
    const result = await ctx.prisma.image.findUnique({
      where: {
        id: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      src: src,
      user_id: 1,
    });
  });
  test("Update entry in Image DB Model", async () => {
    mockCtx.prisma.image.update.mockResolvedValueOnce({
      id: 1,
      user_id: 1,
      alt: "test2",
      src: src,
    });
    const result = await ctx.prisma.image.update({
      where: {
        id: 1,
      },
      data: {
        alt: "test2",
        src: src,
        user_id: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test2",
      src: src,
      user_id: 1,
    });
  });
  test("Delete entry from Image DB Model", async () => {
    mockCtx.prisma.image.delete.mockResolvedValueOnce({
      id: 1,
      user_id: 1,
      alt: "test",
      src: src,
    });
    const result = await ctx.prisma.image.delete({
      where: {
        id: 1,
      },
    });
    expect(result).toEqual({
      id: 1,
      alt: "test",
      src: src,
      user_id: 1,
    });
  });
});
