import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { MyLoggerService } from 'src/common/winston/logger.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly logger: MyLoggerService,
  ) {}

  @Query(() => [User])
  async findAllUser(): Promise<User[]> {
    try {
      const result = await this.userService.findAllUser();
      this.logger.debug('result');
      this.logger.log(result);
      return result;
    } catch (err) {
      console.error(err);
      this.logger.error('findAllUser Error ', err);
    }
  }
}
