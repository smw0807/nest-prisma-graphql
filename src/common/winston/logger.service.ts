import { Injectable, LoggerService } from '@nestjs/common';
import { Logger } from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import * as util from 'util';

@Injectable()
export class MyLoggerService implements LoggerService {
  private logger: Logger;

  constructor(className: string) {
    this.logger = winston.createLogger({
      level: 'debug',
      // Winston 설정
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike(className, {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.File({ filename: 'log/combined.log' }),
      ],
    });
  }
  private formatMessage(message: any): string {
    return typeof message === 'object'
      ? util.inspect(message, { depth: 5 })
      : message;
  }

  log(message: any) {
    this.logger.info(this.formatMessage(message));
  }
  error(message: any, trace: string) {
    this.logger.error(this.formatMessage(message), { trace });
  }
  warn(message: any) {
    this.logger.warn(this.formatMessage(message));
  }
  debug?(message: any) {
    this.logger.debug(this.formatMessage(message));
  }
  verbose?(message: any) {
    this.logger.verbose(this.formatMessage(message));
  }
}
