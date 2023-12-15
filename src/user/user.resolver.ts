import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { MyLoggerService } from 'src/common/winston/logger.service';
import { UserCreateInput, UserCreateManyInput } from './inputs/user.input';

@Resolver(() => User)
export class UserResolver {
  private readonly logger: MyLoggerService = new MyLoggerService(
    UserResolver.name,
  );
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { description: '사용자 조회' })
  async findAllUser(): Promise<User[]> {
    try {
      const result = await this.userService.findAllUser();
      this.logger.debug(result);
      return result;
    } catch (err) {
      console.error(err);
      this.logger.error('findAllUser Error ', err);
    }
  }

  @Mutation(() => User, { description: '사용자 등록' })
  async createUser(@Args('data') data: UserCreateInput): Promise<User> {
    try {
      const result = await this.userService.createUser(data);
      this.logger.debug(result);
      return result;
    } catch (err) {
      console.error(err);
      this.logger.error('createUser Error ', err);
    }
  }

  @Mutation(() => Boolean, { description: '사용자 벌크 등록' })
  async createManyUser(@Args('data') data: UserCreateManyInput) {
    try {
      const result = await this.userService.createManyUser(data);
      return true;
    } catch (err) {
      console.error(err);
      this.logger.error('createManyUser Error ', err);
      return false;
    }
  }
}
/*
{
    "data" : {
        "users": [
            {
                "name": "song min woo",
                "email": "smw006@naver.com"
            },
            {
                "name": "song min woo",
                "email": "smw007@naver.com"
            },
            {
                "name": "song min woo",
                "email": "smw008@naver.com"
            }
        ]
    }
}
*/
