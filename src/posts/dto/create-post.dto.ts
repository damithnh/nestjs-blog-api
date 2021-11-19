import { PostDto } from './post.dto';

export class CreatePostDto extends PostDto {
  createdTime: Date;
}