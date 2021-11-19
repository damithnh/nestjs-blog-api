import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/posts.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly model: Model<PostDocument>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return await this.model.findById(id).exec();
  }

  async create(createPostsDto: CreatePostDto): Promise<Post> {
    return await new this.model({
      ...createPostsDto,
      createdTime: new Date(),
    }).save();
  }

  async update(id: string, updatePostsDto: UpdatePostDto): Promise<Post> {
    return await this.model.findByIdAndUpdate(id, updatePostsDto,
                                              {lastUpdatedTime: new Date()}).exec();
  }

  async delete(id: string): Promise<Post> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}

