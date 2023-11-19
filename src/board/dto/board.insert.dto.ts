import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '게시글 추가 dto' })
export class BoardInsertDto {
  @Field({ description: '게시글 제목' })
  title: string;

  @Field({ description: '게시글 내용' })
  content: string;
}
