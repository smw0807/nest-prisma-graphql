import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInsertDto {
  @Field()
  name: string;

  @Field()
  email: string;
}
