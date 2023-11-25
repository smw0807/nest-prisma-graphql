import { InputType, Field, Int } from '@nestjs/graphql';

@InputType({ description: '댓글 추가 dto' })
export class CommentInsertDto {
  @Field({ description: '댓글 내용' })
  readonly text: string;

  @Field(() => Int, { description: '사용자 아이디' })
  readonly userId: number;

  @Field(() => Int, { description: '게시글 아이디' })
  readonly boardId: number;
}
