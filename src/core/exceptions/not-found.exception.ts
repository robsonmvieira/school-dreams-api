import { HttpStatus } from '@nestjs/common'

import { ExceptionBase } from './exception.base'
import { ExceptionCodes } from './exception.codes'

export class NotFoundException extends ExceptionBase {
  readonly code = ExceptionCodes.notFound
  readonly statusNumber: 404
  constructor(message: string, status = HttpStatus.NOT_FOUND) {
    super(message, status)
  }
}
