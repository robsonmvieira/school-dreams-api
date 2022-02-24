import { CPFValueObject } from '@shared/value-objects'

describe('CPF Value Object', () => {
  it('should return error if invalid CPF is provided', () => {
    const cpfVo = CPFValueObject.create('145775651')
    expect(cpfVo.isFailure).toBe(true)
  })

  it('should return true if valid CPF is provided', () => {
    const cpfVo = CPFValueObject.create('084.995.532-11')
    expect(cpfVo.isSuccess).toBe(true)
  })
})
