import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Category, CategoryAggregate } from '@modules/admin/categories/entities'
import { CategoriesService } from '@modules/admin/categories/services'
import { CategoryType } from '@modules/admin/categories/entities'
import { UpdateCategoryInput } from '@modules/admin/categories/dto'
import { CategoryMapper } from '@modules/admin/categories/database'
import { UniqueEntityID } from '@core/based-classes'

@Resolver(() => Category)
export class UpdateCategoryGraphQlResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => CategoryType, { name: 'updateCategory' })
  async update(
    @Args('id') id: string,
    @Args('payload') data: UpdateCategoryInput
  ): Promise<Category> {
    const categoryAggregate = CategoryAggregate.create(
      {
        title: data.title
      },
      new UniqueEntityID(id)
    )

    if (categoryAggregate.isFailure) {
      // Todo Validation in uuid

      return
    }
    const mapper = new CategoryMapper()

    const ormCategory = mapper.toOrmProps(categoryAggregate.getResult())

    return this.categoriesService.update(id, ormCategory)
  }
}
