import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/user/model/user.model'; // 가정: User 모델이 이미 정의되어 있음
import { Board } from 'src/board/model/board.model'; // 가정: Board 모델이 이미 정의되어 있음

@ObjectType('Comment') // GraphQL의 ObjectType
export class Comment {
  @Field((type) => Int)
  id: number;

  @Field()
  text: string;

  @Field((type) => Int)
  userId: number;

  @Field((type) => Int)
  boardId: number;

  @Field()
  createdAt: Date;

  @Field((type) => User)
  user: User;

  @Field((type) => Board)
  board: Board;
}
