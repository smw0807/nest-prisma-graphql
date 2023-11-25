import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CommentService, CommentResolver],
  imports: [PrismaModule],
})
export class CommentModule {}
