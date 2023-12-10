import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '사용자 등록' })
export class UserCreateInput {
  @Field(() => String, { description: '사용자 이름' })
  readonly name: string;

  @Field(() => String, { description: '사용자 이메일' })
  readonly email: string;
}
