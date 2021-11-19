import { postStub } from "../test/stubs/post.stub";

export const PostsService = jest.fn().mockReturnValue({
    findOne: jest.fn().mockReturnValue(postStub()),
    findAll: jest.fn().mockReturnValue([postStub()]),
    create: jest.fn().mockReturnValue(postStub()),
    update: jest.fn().mockReturnValue(postStub())
})