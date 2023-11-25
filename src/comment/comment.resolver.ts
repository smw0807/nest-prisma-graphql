import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { CommentInsertDto } from './dto/comment.dto';
import { Comment } from './model/comment.model';

@Resolver()
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query(() => [Comment], { description: '댓글 목록' })
  async findManyComment(): Promise<Comment[]> {
    return this.commentService.findManyComment();
  }

  @Query(() => Comment, { description: '사용자 아이디로 댓글 찾기' })
  async findByCommentUserId(@Args('userId') userId: number): Promise<Comment> {
    return this.commentService.findByUserId(userId);
  }

  @Mutation(() => Comment, { description: '댓글 등록' })
  async createCommnet(@Args('data') data: CommentInsertDto): Promise<Comment> {
    return this.commentService.createComment(data);
  }
}
