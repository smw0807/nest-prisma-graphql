import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInsertDto } from './dto/user.insert.dto';
import { CommonResponse } from '../common/common.response';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // 모든 유저 가져오기
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // 유저 1명 정보 가져오기
  async findById(userId: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { userId },
      include: {
        boards: true, // => userId가 들어있는 모든 board 데이터 가져옴
        comments: true, // =>  userID가 들어있는 모든 comment 데이터 가져옴
      },
    });
  }

  // 유저 데이터 추가
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
}

//! findById
/* 
query findByUserId($user_id: Float!)
{
  findByUserId(id: $user_id) {
    userId
    userName
    email
    boards {
      boardId
      title
    }
    comments {
      userId
      boardId
      text
    }
  }
}
*/
