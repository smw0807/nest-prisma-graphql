import { Injectable, LoggerService } from '@nestjs/common';
import { Logger } from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

@Injectable()
export class MyLoggerService implements LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'debug',
      // Winston 설정
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyNest', {
              //todo class 이름 받을 수 있게
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.File({ filename: 'log/combined.log' }),
      ],
    });
  }

  log(message: any) {
    this.logger.info(message);
  }

  error(message: any, trace: string) {
    this.logger.error(message, { trace });
  }

  warn(message: any) {
    this.logger.warn(message);
  }

  debug(message: any) {
    this.logger.debug(message);
  }

  verbose(message: any) {
    this.logger.verbose(message);
  }
}
