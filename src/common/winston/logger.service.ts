import { Injectable, LogLevel, LoggerService } from '@nestjs/common';
import { Logger } from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

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
  log(message: any, ...optionalParams: any[]) {
    this.logger.info(message, ...optionalParams);
  }
  error(message: any, trace: string, ...optionalParams: any[]) {
    this.logger.error(message, { trace }, ...optionalParams);
  }
  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, ...optionalParams);
  }
  debug?(message: any, ...optionalParams: any[]) {
    this.logger.debug(message, ...optionalParams);
  }
  verbose?(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message, ...optionalParams);
  }
}
