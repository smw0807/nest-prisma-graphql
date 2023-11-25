import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/user/model/user.model'; // 가정: User 모델이 이미 정의되어 있음
import { Board } from 'src/board/model/board.model'; // 가정: Board 모델이 이미 정의되어 있음

@ObjectType('Comment', { description: '댓글' })
export class Comment {
  @Field((type) => Int, { description: '댓글 아이디' })
  id: number;

  @Field({ description: '댓글 내용' })
  text: string;

  @Field((type) => Int, { description: '사용자 아이디' })
  userId: number;

  @Field((type) => Int, { description: '게시판 아이디' })
  boardId: number;

  @Field({ description: '댓글 작성일' })
  createdAt: Date;

  @Field((type) => User, { nullable: true })
  user?: User;

  @Field((type) => Board, { nullable: true })
  board?: Board;
}
