import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    console.log('exception: ', exception);
    const responseBody = {
      status: 'fail',
      code: httpStatus,
      timestamp: new Date().toISOString(),
      data: `${exception} at path: ${httpAdapter.getRequestUrl(ctx.getRequest())}`,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
