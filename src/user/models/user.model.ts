import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [Post], { nullable: 'itemsAndList' })
  posts: Post[];
}
