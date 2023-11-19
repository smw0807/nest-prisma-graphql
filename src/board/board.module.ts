import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';

@Module({
  providers: [PrismaService, BoardService, BoardResolver],
})
export class BoardModule {}
