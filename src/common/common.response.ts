import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-scalars';
@ObjectType()
export class CommonResponse {
  @Field({ defaultValue: true, nullable: true, description: '성공여부' })
  success?: boolean;

  @Field({ nullable: true, defaultValue: '', description: '메세지' })
  message?: string;

  @Field(() => GraphQLJSONObject, { nullable: true, defaultValue: null })
  data?: any;
}
