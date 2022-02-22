import { EmailValueObject } from '../../../../../src/modules/domain/shared/value-objects/email.vo'

describe('Email VO', () => {
  it('should return a valid email', () => {
    const email = EmailValueObject.create('valid_email@domain.com')
    expect(email.isFailure).toBe(false)
  })

  it('should return true if invalid email is provider', () => {
    const email = EmailValueObject.create('invalid_email.com')
    expect(email.isFailure).toBe(true)
  })

  it('should return true if invalid email is EMAIL is captalize', () => {
    const email = EmailValueObject.create('Valid_EMAIL@contato.com')
    expect(email.getResult().props.value).toBe('valid_email@contato.com')
  })
})
