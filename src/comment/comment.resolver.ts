import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentInsertDto } from './dto/comment.dto';
import { Comment } from './model/comment.model';
import { CommonResponse } from 'src/common/common.response';

@Resolver()
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query(() => [Comment])
  async findManyComment(): Promise<Comment[]> {
    return this.commentService.findManyComment();
  }

  @Query(() => Comment)
  async findByUserId(@Args('userId') userId: number): Promise<Comment> {
    return this.commentService.findByUserId(userId);
  }

  @Mutation(() => Comment, { description: '댓글 등록' })
  async createCommnet(@Args('data') data: CommentInsertDto): Promise<Comment> {
    return this.commentService.createComment(data);
  }
}
