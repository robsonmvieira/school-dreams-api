import { CategoryMapper } from '@modules/admin/categories/database'
import { Category, CategoryAggregate } from '@modules/admin/categories/entities'

describe('Category Mapper', () => {
  it('Should return OrmCategory instance', () => {
    const title = 'valid_title'
    const mapper = new CategoryMapper()
    const categoryAggregate = CategoryAggregate.create({
      title
    }).getResult()
    const ormCategory = mapper.toOrmProps(categoryAggregate)

    expect(ormCategory.title).toBe(title)
    expect(ormCategory).toBeInstanceOf(Category)
  })

  it('Should return CategoryAggregate instance', () => {
    const title = 'valid_title'
    const mapper = new CategoryMapper()
    const category = new Category({ title })
    const categoryAggregate = mapper.toDomainProps(category)
    expect(categoryAggregate.title).toBe(title)
  })
})
