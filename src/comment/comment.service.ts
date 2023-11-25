import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentInsertDto } from './dto/comment.dto';
import { Comment } from './model/comment.model';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async findManyComment(): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      include: {
        user: {
          select: {
            userId: true,
            userName: true,
            email: true,
          },
        },
        board: {
          select: {
            boardId: true,
            title: true,
            content: true,
          },
        },
      },
    });
  }

  async findByUserId(userId: number): Promise<Comment> {
    return this.prisma.comment.findUnique({
      where: { id: userId },
    });
  }

  async createComment(dto: CommentInsertDto): Promise<Comment> {
    return this.prisma.comment.create({
      data: { ...dto },
    });
  }
}
