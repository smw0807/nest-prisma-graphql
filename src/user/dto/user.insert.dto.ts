import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInsertDto {
  @Field({ description: '유저 이름' })
  userName: string;

  @Field({ description: '유저 이메일' })
  email: string;
}
