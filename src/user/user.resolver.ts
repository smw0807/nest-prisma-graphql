import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInsertDto } from './dto/user.insert.dto';
import { User } from './model/user.model';
import { UserInsert } from './model/user.insert.model';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async findAllUser() {
    return this.userService.findAll();
  }

  @Mutation(() => UserInsert, { description: '유저 생성' })
  async createUser(@Args('data') userData: UserInsertDto) {
    return this.userService.createUser(userData);
  }
}
