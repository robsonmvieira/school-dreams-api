import { HttpException } from '@nestjs/common'

export abstract class ExceptionBase extends HttpException {
  abstract code: string
  constructor(message: string, status: number) {
    super(message, status)
    // Error.captureStackTrace(this, this.constructor)
  }
}
