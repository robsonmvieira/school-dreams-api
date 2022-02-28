import { HttpStatus } from '@nestjs/common'
import { ExceptionBase } from './exception.base'
import { ExceptionCodes } from './exception.codes'

export class NotContentException extends ExceptionBase {
  readonly code = ExceptionCodes.notContent
  readonly statusNumber: 204
  constructor(message: string, status = HttpStatus.NO_CONTENT) {
    super(message, status)
  }
}
