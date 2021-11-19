import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {

  @Prop()
  postId: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  content?: string;

  @Prop()
  author?: string;

  @Prop()
  createdTime?: Date;

  @Prop()
  lastUpdatedTime?: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
