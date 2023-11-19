import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '유저 추가 dto' })
export class UserInsertDto {
  @Field({ description: '유저 이름' })
  userName: string;

  @Field({ description: '유저 이메일' })
  email: string;
}
