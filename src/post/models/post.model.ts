import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  published?: boolean;

  @Field(() => User, { nullable: true })
  author?: User;

  @Field(() => Int, { nullable: true })
  authorId?: number;
}
