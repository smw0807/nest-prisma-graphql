import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { MyLoggerService } from 'src/common/winston/logger.service';
import { UserCreateInput } from './inputs/user.input';

@Resolver(() => User)
export class UserResolver {
  private readonly logger: MyLoggerService = new MyLoggerService(
    UserResolver.name,
  );
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
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

  @Mutation(() => User)
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
}
