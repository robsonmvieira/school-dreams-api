import { Result } from '../../core/based-classes/result'
import { ValueObject } from '../../core/based-classes/value-object'

export type CPFValueObjectProps = {
  value: string
}
export class CPFValueObject extends ValueObject<CPFValueObjectProps> {
  private constructor(props: CPFValueObjectProps) {
    super(props)
  }

  get value(): string {
    return this.props.value
  }

  public static create(newCpf: string): Result<CPFValueObject> {
    const isValidEmail = this.isValidCpf(newCpf)
    if (!isValidEmail) {
      return Result.fail<CPFValueObject>('You must provider a valid CPF ')
    }
    return Result.ok<CPFValueObject>(new CPFValueObject({ value: newCpf }))
  }

  private static isValidCpf(cpf: string): boolean {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    return cpf.match(cpfRegex) ? true : false
  }
}
