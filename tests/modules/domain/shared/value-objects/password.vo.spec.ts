import { PasswordValueObject } from '../../../../../src/modules/domain/shared/value-objects/password.vo'

describe('Password Value Object', () => {
  it('should return failure if password length is less then 6', () => {
    const password = PasswordValueObject.create('123')
    expect(password.isFailure).toBe(true)
    expect(password.error).toBe(
      'You need provider the password size between 6 and 10'
    )
  })

  it('should return failure if password length is greather then 6', () => {
    const password = PasswordValueObject.create('valid_password')
    expect(password.isFailure).toBe(true)
    expect(password.error).toBe(
      'You need provider the password size between 6 and 10'
    )
  })
})
