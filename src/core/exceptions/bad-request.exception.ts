import { ExceptionBase } from './exception.base'
import { ExceptionCodes } from './exception.codes'

export class BadRequestException extends ExceptionBase {
  readonly code = ExceptionCodes.badRequest
  readonly statusNumber: 400
}
