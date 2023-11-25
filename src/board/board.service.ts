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

  // 사용자 아이디로 게시글 조회
  async findByUserId(userId: number) {
    return this.prisma.userBoard.findMany({
      where: { userId: userId },
      include: {
        board: true,
      },
    });
  }

  // 게시글 추가
  async createBoard(
    boardData: BoardInsertDto,
    userId: number,
  ): Promise<CommonResponse> {
    let result: CommonResponse;
    try {
      const board = await this.prisma.board.create({
        data: {
          ...boardData,
          users: {
            connect: { userId },
          },
        },
      });
      result = { message: 'ok', data: board };
    } catch (err) {
      console.error(err);
      result = { success: false, message: err.mesage };
    }
    return result;
  }
}
