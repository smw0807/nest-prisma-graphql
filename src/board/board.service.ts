import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Board } from './model/board.model';
import { BoardInsertDto } from './dto/board.insert.dto';
import { CommonResponse } from 'src/common/common.response';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  // 모든 게시글 가져오기
  async findAll(): Promise<Board[]> {
    return this.prisma.board.findMany();
  }

  // 게시글 추가
  async createBoard(
    boardData: BoardInsertDto,
    userIds: number[],
  ): Promise<CommonResponse> {
    let result: CommonResponse;
    try {
      const board = await this.prisma.board.create({
        data: {
          ...boardData,
          users: {
            connect: userIds.map((userId) => ({ userId })),
          },
        },
      });
      console.log('board : ', board);
      await this.createUserBoard(board.boardId, 3);
      result = { message: 'ok', data: board };
    } catch (err) {
      console.error(err);
      result = { success: false, message: err.mesage };
    }
    return result;
  }

  // board, user관계형 데이터 추가(userBOard에)
  private async createUserBoard(
    boardId: number,
    userId: number,
  ): Promise<void> {
    try {
      const userBoard = await this.prisma.userBoard.create({
        data: {
          boardId: boardId,
          userId: userId,
        },
      });
      console.log('userBoard : ', userBoard);
    } catch (err) {
      console.error(err);
    }
  }
}
