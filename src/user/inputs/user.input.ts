import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '사용자 등록' })
export class UserCreateInput {
  @Field(() => String, { nullable: true, description: '사용자 이름' })
  readonly name?: string;

  @Field(() => String, { description: '사용자 이메일' })
  readonly email: string;
}

@InputType({ description: '사용자 벌크 등록' })
export class UserCreateManyInput {
  @Field(() => [UserCreateInput], { description: '사용자 정보들' })
  readonly users: UserCreateInput[];
}
