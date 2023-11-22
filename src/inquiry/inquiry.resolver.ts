import { Resolver, ResolveField, Parent, Query } from '@nestjs/graphql';
import { InquiryService } from './inquiry.service';
import { Inquiry, InquiryType } from './model/inquiry.model';

@Resolver((of) => Inquiry)
export class InquiryResolver {
  constructor(private inquiryService: InquiryService) {}

  @Query(() => [Inquiry])
  async findManyInquiry() {
    return this.inquiryService.findManyInquiry();
  }

  /**
   * @ResolveField 데코레이터는 해당 필드를 해결하기 위한 메서드임을 나타내며
   * @Parent 데코레이터는 현재 해결하고 있는 Inquiry 객체를 참조합니다.
   * 이 예제는 각 Inquiry의 typeId 및 additionalTypeId에 해당하는 InquiryType 객체를 찾아서 반환합니다.
   */

  @ResolveField('type', () => InquiryType, { nullable: true })
  async getType(@Parent() inquiry: Inquiry) {
    if (!inquiry.typeId) {
      return null;
    }
    return this.inquiryService.findUniqueInquiryType(inquiry.typeId);
  }

  @ResolveField('additionalType', () => InquiryType, { nullable: true })
  async getAdditionalType(@Parent() inquiry: Inquiry) {
    if (!inquiry.additionalTypeId) {
      return null;
    }
    return this.inquiryService.findUniqueInquiryType(inquiry.additionalTypeId);
  }
}
/**
query {
  findManyInquiry {
    id
    title
    content
    type {
      id
      name
    }
    additionalType {
      id
      name
    }
    createdAt
    updatedAt
  }
}
 */
