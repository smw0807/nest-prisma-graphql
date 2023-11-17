import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
@ObjectType()
export class CommonResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  data?: any;
}
