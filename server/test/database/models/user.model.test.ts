import { MockContext, Context, createMockContext } from "../db.ctx";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx;
});

/*
model User {
    id Int @id @default(autoincrement())
    profile_img Image?
    username String @unique
    post_allowed Boolean @default(false)

    current_post Post?

    created_at DateTime @default(now())
    updated_at DateTime @updatedAt
}

*/

describe("Test User DB Model", () => {
    const created_at = new Date();
    const updated_at = new Date();

    test("Add entry to User DB Model", async () => {
        mockCtx.prisma.user.create.mockResolvedValueOnce({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
        const result = await ctx.prisma.user.create({
        data: {
            username: "test",
            post_allowed: true,
            current_post: {
            connect: {
                id: 1,
            },
            },
        },
        });
        expect(result).toEqual({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
    });
    test("Get entry from User DB Model", async () => {
        mockCtx.prisma.user.findUnique.mockResolvedValueOnce({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
        const result = await ctx.prisma.user.findUnique({
        where: {
            id: 1,
        },
        });
        expect(result).toEqual({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
    });
    test("Update entry in User DB Model", async () => {
        mockCtx.prisma.user.update.mockResolvedValueOnce({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
        const result = await ctx.prisma.user.update({
        where: {
            id: 1,
        },
        data: {
            username: "test",
            post_allowed: true,
            current_post: {
            connect: {
                id: 1,
            },
            },
        },
        });
        expect(result).toEqual({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
    });
    test("Delete entry from User DB Model", async () => {
        mockCtx.prisma.user.delete.mockResolvedValueOnce({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
        const result = await ctx.prisma.user.delete({
        where: {
            id: 1,
        },
        });
        expect(result).toEqual({
        id: 1,
        username: "test",
        post_allowed: true,
        created_at: created_at,
        updated_at: updated_at,
        });
    });
});