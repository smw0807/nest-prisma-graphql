import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class InquiryType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createBy?: string;

  @Field({ nullable: true })
  updateBy?: string;

  @Field(() => [Inquiry], { nullable: 'itemsAndList' })
  inquiryType: Inquiry[];

  @Field(() => [Inquiry], { nullable: 'itemsAndList' })
  inquiryAdditionalType: Inquiry[];

  @Field(() => [InquiryType], { nullable: 'itemsAndList' })
  parentInquiryType: InquiryType[];

  @Field(() => [InquiryType], { nullable: 'itemsAndList' })
  precedessorParentInquiryType: InquiryType[];

  @Field(() => Int, { nullable: true })
  parentInquiryTypeId?: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class Inquiry {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => InquiryType, { nullable: true })
  type?: InquiryType;

  @Field(() => Int, { nullable: true })
  typeId?: number;

  @Field(() => InquiryType, { nullable: true })
  additionalType?: InquiryType;

  @Field(() => Int, { nullable: true })
  additionalTypeId?: number;

  @Field(() => [Inquiry], { nullable: 'itemsAndList' })
  parentInquiry: Inquiry[];

  @Field(() => [Inquiry], { nullable: 'itemsAndList' })
  precedessorParentInquiry: Inquiry[];

  @Field(() => Int, { nullable: true })
  parentInquiryId?: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;

  @Field()
  isShow: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  createBy?: string;
}
