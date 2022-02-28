export interface SerializedException {
  message: string
  code: string
  stack?: string
  metadata?: unknown
  /**
   * ^ Consider adding optional `metadata` object to
   * exceptions (if language doesn't support anything
   * similar by default) and pass some useful technical
   * information about the exception when throwing.
   * This will make debugging easier.
   */
}

export abstract class ExceptionBase extends Error {
  abstract code: string
  abstract statusNumber: number
  constructor(message: string, readonly metadata?: unknown) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      stack: this.stack,
      metadata: this.metadata
    }
  }
}
