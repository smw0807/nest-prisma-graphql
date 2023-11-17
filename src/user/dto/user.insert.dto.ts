import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInsertDto {
  @Field({ description: '유저 이름' })
  username: string;

  @Field({ description: '유저 이메일' })
  email: string;
}
