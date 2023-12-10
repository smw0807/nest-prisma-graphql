import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

registerEnumType(Role, { name: 'Role' });
@ObjectType({ description: '사용자' })
export class User {
  @Field(() => Int, { description: '아이디' })
  readonly id: number;

  @Field(() => String, { description: '이메일' })
  readonly email: string;

  @Field({ nullable: true, description: '이름' })
  readonly name?: string;

  @Field(() => Int, { description: '프로필 조회수' })
  readonly profileViews: number;

  @Field(() => Role, { description: '역할' })
  readonly role: Role;

  @Field(() => Boolean, { nullable: true, description: '??' })
  readonly coinflips?: boolean;

  // readonly posts;
  // readonly profile?;
}
