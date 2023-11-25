import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comment } from 'src/comment/model/comment.model';
import { Board, UserBoard } from 'src/board/model/board.model';

@ObjectType('User')
export class User {
  @Field((type) => Int)
  userId: number;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  createdAt?: Date;

  @Field((type) => [Comment], { nullable: true })
  comments?: Comment[];

  @Field((type) => [Board], { nullable: true })
  boards?: Board[];

  @Field((type) => [UserBoard], { nullable: true })
  userBoards?: UserBoard[];
}
