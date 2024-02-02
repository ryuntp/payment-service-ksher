import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse();

        if (status === HttpStatus.NOT_FOUND || status === HttpStatus.METHOD_NOT_ALLOWED) {
            response
                .status(status)
                .json({
                    error: {
                        name: 'mockRequestNotFoundError',
                        message: 'Double check your method and the request path and try again.',
                        header: 'No matching requests'
                    }
                });
        } else {
            response.status(status).json(exceptionResponse);
        }
    }
}
