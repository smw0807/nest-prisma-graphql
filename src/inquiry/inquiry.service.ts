import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InquiryService {
  constructor(private prisma: PrismaService) {}
  async findManyInquiry() {
    return this.prisma.inquiry.findMany();
  }

  async findUniqueInquiryType(id: number) {
    return this.prisma.inquiryType.findUnique({
      where: { id: id },
    });
  }
}
