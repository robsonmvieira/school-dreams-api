import { Category, CategoryAggregate } from '@modules/admin/categories/entities'

export class CategoryMapper {
  toDomainProps(props: Category): CategoryAggregate {
    return CategoryAggregate.create({ title: props.title }).getResult()
  }

  toOrmProps(props: CategoryAggregate): Category {
    const category = new Category(props.plainProps)
    return category
  }
}
