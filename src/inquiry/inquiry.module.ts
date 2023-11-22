import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { InquiryService } from './inquiry.service';
import { InquiryResolver } from './inquiry.resolver';

@Module({
  providers: [InquiryService, InquiryResolver],
  imports: [PrismaModule],
})
export class InquiryModule {}
