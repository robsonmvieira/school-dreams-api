import { Result } from '../../core/based-classes/result'
import { ValueObject } from '../../core/based-classes/value-object'
import isEmailValid from 'validator/lib/isEmail'

export type EmailValueObjectProps = {
  value: string
}
export class EmailValueObject extends ValueObject<EmailValueObjectProps> {
  private constructor(props: EmailValueObjectProps) {
    super(props)
  }

  public static create(email: string): Result<EmailValueObject> {
    const emailNormalized = email.toLocaleLowerCase()
    const isValidEmail = isEmailValid(emailNormalized)
    if (!isValidEmail) {
      return Result.fail<EmailValueObject>('No valid email is provided')
    }
    return Result.ok<EmailValueObject>(
      new EmailValueObject({ value: emailNormalized })
    )
  }
}
