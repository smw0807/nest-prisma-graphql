import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Comment } from 'src/comment/model/comment.model';
import { User } from 'src/user/model/user.model';

@ObjectType('Board', { description: '게시판' })
export class Board {
  @Field((type) => Int, { description: '게시글 아이디' })
  boardId: number;

  @Field({ description: '게시글 제목' })
  title: string;

  @Field({ description: '게시글 내용' })
  content: string;

  @Field({ description: '게시글 생성일' })
  createdAt?: Date;

  @Field((type) => [Comment], { nullable: true })
  comments?: Comment[];

  @Field((type) => [User], { nullable: true })
  users?: User[];

  @Field((type) => [UserBoard], { nullable: true })
  userBoards?: UserBoard[];
}

@ObjectType('UserBoard', { description: '사용자-게시글 관계 모델' })
export class UserBoard {
  @Field((type) => Int, { description: '사용자 아이디' })
  userId: number;

  @Field((type) => Int, { description: '게시글 아이디' })
  boardId: number;

  @Field((type) => User, { nullable: true })
  user?: User;

  @Field((type) => Board, { nullable: true })
  board?: Board;
}
