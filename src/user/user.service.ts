import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  //사용자 목록
  async findAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
