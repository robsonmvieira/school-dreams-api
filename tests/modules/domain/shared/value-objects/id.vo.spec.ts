import { UniqueEntityID } from '../../../../../src/modules/domain/core/based-classes/unique-entity.id'
import { IDValueObject } from '../../../../../src/modules/domain/shared/value-objects/id.vo'

describe('Unique Id VO', () => {
  it('should create a valid unique id Vo', () => {
    const uniqueVO = IDValueObject.create()
    expect(uniqueVO.isFailure).toBe(false)
  })

  it('should create a valid unique id with param', () => {
    const uniqueVO = IDValueObject.create(new UniqueEntityID('id_valid'))
    expect(uniqueVO.getResult().id.toValue()).toBe('id_valid')
  })
})
