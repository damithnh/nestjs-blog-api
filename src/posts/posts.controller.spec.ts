import { Test, TestingModule } from '@nestjs/testing';
import { find } from 'rxjs';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './schemas/posts.schema';
import { postStub } from './test/stubs/post.stub';

jest.mock('./posts.service');
describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService)
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('find one', () => {
    describe("when get post is called", () => {
      let post: Post;
      beforeEach(async () => {
          post = await controller.find(postStub().postId);
      })

      test("then postService is called", () => {
        expect(service.findOne).toBeCalledWith(postStub().postId)
      })
    })
  })

});
