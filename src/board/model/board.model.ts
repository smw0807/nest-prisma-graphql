import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: '게시판' })
export class Board {
  @Field(() => Int, { description: '게시판 아이디' })
  boardId: number;

  @Field({ description: '게시글 제목' })
  title: string;

  @Field({ description: '게시글 내용' })
  content: string;

  @Field({ description: '게시글 생성일' })
  createdAt: Date;

  // 댓글??

  // board와 userBoard 관계?
}

@ObjectType({ description: '유저 게시판 관계형 테이블' })
export class UserBoard {
  @Field({ description: '게시판 아이디' })
  boardid: number;

  @Field({ description: '유저 아이디' })
  userId: number;
}
