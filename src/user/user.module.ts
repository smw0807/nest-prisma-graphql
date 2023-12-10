import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/common/prisma/prisma.module';

@Module({
  providers: [UserService, UserResolver],
  imports: [PrismaModule],
  exports: [],
})
export class UserModule {}
