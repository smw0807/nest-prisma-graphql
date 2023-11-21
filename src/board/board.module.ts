import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';

@Module({
  providers: [BoardService, BoardResolver],
  imports: [PrismaModule],
})
export class BoardModule {}
