import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserCreateInput } from './inputs/user.input';
import { MyLoggerService } from 'src/common/winston/logger.service';

@Injectable()
export class UserService {
  private readonly logger: MyLoggerService = new MyLoggerService(
    UserService.name,
  );

  constructor(private readonly prisma: PrismaService) {}
  //사용자 목록
  async findAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  //사용자 등록
  async createUser(data: UserCreateInput): Promise<User> {
    this.logger.log(data);
    return this.prisma.user.create({
      data: data,
    });
  }
}
