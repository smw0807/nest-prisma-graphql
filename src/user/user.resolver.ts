import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInsertDto } from './dto/user.insert.dto';
import { User } from './model/user.model';
import { CommonResponse } from '../common/common.response';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { description: '모든 유저정보 가져오기' })
  async findAllUser() {
    return this.userService.findAll();
  }

  /**
   * nullable: true 옵션을 주지 않았을 때
   * 없는 id로 쿼리 요청시 에러 발생함
   * 주면 없을 때 null 반환
   */
  @Query(() => User, { nullable: true, description: '유저 정보 가져오기' })
  async findByUserId(@Args('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Mutation(() => CommonResponse, { description: '유저 생성' })
  async createUser(
    @Args('data') userData: UserInsertDto,
  ): Promise<CommonResponse> {
    return this.userService.createUser(userData);
  }
}
