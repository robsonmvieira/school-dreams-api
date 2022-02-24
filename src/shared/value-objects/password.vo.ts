import { Result, ValueObject } from '@core/based-classes'

export type PasswordValueObjectProps = {
  value: string
}

export class PasswordValueObject extends ValueObject<PasswordValueObjectProps> {
  private static readonly minimalPasswordLength = 6
  private static readonly maximumPasswordLength = 10
  private constructor(props: PasswordValueObjectProps) {
    super(props)
  }

  get value(): string {
    return this.props.value
  }
  public static create(newPassword: string): Result<PasswordValueObject> {
    const emailLength = newPassword.length
    const isValidSize =
      emailLength >= this.minimalPasswordLength &&
      emailLength <= this.maximumPasswordLength
    if (!isValidSize) {
      return Result.fail<PasswordValueObject>(
        `You need provider the password size between ${this.minimalPasswordLength} and ${this.maximumPasswordLength}`
      )
    }
    return Result.ok<PasswordValueObject>(
      new PasswordValueObject({ value: newPassword })
    )
  }
}
