import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { Observable, map, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('New request!');
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log(`\nExecution time: ${Date.now() - now}ms`);
        console.log('\nRequest was successful!');
      }),
      map((data) => {
        return {
          status: 'success',
          data,
        };
      }),
      catchError((err) => {
        console.log(`\nExecution time: ${Date.now() - now}ms`);
        console.log('\nRequest was failed!');
        console.log('\nError message: ', err);
        return of({ status: 'failed', data: `${err}` });
        // return throwError(() => new InternalServerErrorException());
      }),
    );
  }
}
