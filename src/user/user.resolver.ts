import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInsertDto } from './dto/user.insert.dto';
import { UserFindById } from './dto/user.search.dto';
import { User } from './model/user.model';
import { CommonResponse } from '../common/common.response';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { description: '모든 유저정보 가져오기' })
  async findAllUser() {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true, description: '유저 정보 가져오기' })
  async findByUserId(@Args('id') id: UserFindById): Promise<User | null> {
    return this.userService.findById(id.userId);
  }

  @Mutation(() => CommonResponse, { description: '유저 생성' })
  async createUser(
    @Args('data') userData: UserInsertDto,
  ): Promise<CommonResponse> {
    return this.userService.createUser(userData);
  }
}
