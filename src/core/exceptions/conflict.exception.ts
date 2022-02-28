import { HttpStatus } from '@nestjs/common'

import { ExceptionBase } from './exception.base'
import { ExceptionCodes } from './exception.codes'

export class ConflictException extends ExceptionBase {
  readonly code = ExceptionCodes.conflict
  readonly statusNumber: 400
  constructor(message: string, status = HttpStatus.CONFLICT) {
    super(message, status)
  }
}
