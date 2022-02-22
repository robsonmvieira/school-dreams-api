import { CategoryAggregate } from '@domain/admin/categories/entities'
import { UniqueEntityID } from '@domain/core/based-classes'

describe('Category Aggregate', () => {
  it('Should create a Category Agreggate', () => {
    const category = CategoryAggregate.create({ title: 'Alimentos' })
    expect(category.isSuccess).toBe(true)
  })

  it('Should return Error if category title is less than 3', () => {
    const category = CategoryAggregate.create({ title: 'Al' })
    expect(category.error).toBe('Category title must have minimal of 3 letters')
  })

  it('Should create category if valid id is provided', () => {
    const category = CategoryAggregate.create(
      { title: 'Comercial' },
      new UniqueEntityID('valid_id')
    )
    expect(category.getResult().categoryId).toBe('valid_id')
  })
})
