import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInsertDto } from './dto/user.insert.dto';
import { CommonResponse } from '../common/common.response';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: UserInsertDto): Promise<CommonResponse> {
    let result: CommonResponse;
    try {
      const user = await this.prisma.user.create({ data });
      result = { success: true, data: user, message: 'ok' };
    } catch (err) {
      result = { success: false, data: null, message: err.message };
    }
    return result;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
