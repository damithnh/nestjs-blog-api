import { Post } from "src/posts/schemas/posts.schema";

export const postStub = (): Post => {
    return {
        postId: "123412",
        title: "Test title",
        content: "Test content",
        author: "Test author",
        createdTime: new Date()
    }
}