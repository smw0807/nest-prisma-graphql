import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: '유저 아이디 정보 가져오기' })
export class UserFindById {
  @Field({ description: '유저 아이디' })
  userId: number;
}
