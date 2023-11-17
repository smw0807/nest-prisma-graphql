import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserInsert {
  @Field(() => Int, { description: '유저 아이디' })
  id: number;

  @Field({ description: '유저 이름' })
  userName: string;

  @Field({ description: '유저 이메일' })
  email: string;

  @Field({ description: '유저 셍성일' })
  createdAt: Date;
}
