export abstract class ExceptionBase extends Error {
  abstract code: string
  abstract statusNumber: number
  constructor(message: string, readonly metadata?: unknown) {
    super(message)
  }
}
