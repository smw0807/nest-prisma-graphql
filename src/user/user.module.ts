import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { LoggerModule } from 'src/common/winston/logger.module';

@Module({
  providers: [UserService, UserResolver],
  imports: [PrismaModule, LoggerModule],
  exports: [],
})
export class UserModule {}
