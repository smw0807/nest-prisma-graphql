import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { BoardInsertDto } from './dto/board.insert.dto';
import { Board, UserBoard } from './model/board.model';
import { CommonResponse } from 'src/common/common.response';

@Resolver()
export class BoardResolver {
  constructor(private boardService: BoardService) {}

  @Query(() => [Board], { description: '모든 게시물 가져오기' })
  async findAllBoard(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @Query(() => [UserBoard], { description: '사용자 게시물' })
  async findByUserIdBoard(@Args('userId') id: number) {
    return this.boardService.findByUserId(id);
  }

  @Mutation(() => CommonResponse, { description: '게시물 등록' })
  async createBoard(
    @Args('boardData') boardData: BoardInsertDto,
    @Args('userId') id: number,
  ): Promise<CommonResponse> {
    return this.boardService.createBoard(boardData, id);
  }
}
