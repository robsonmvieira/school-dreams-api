import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Category, CategoryAggregate } from '@modules/admin/categories/entities'
import { CategoriesService } from '@modules/admin/categories/services'
import { CategoryType } from '@modules/admin/categories/entities'
import { CreateCategoryInput } from '@modules/admin/categories/dto'
import { CategoryMapper } from '@modules/admin/categories/database'

@Resolver(() => Category)
export class CreateCategoryGraphQlResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => CategoryType, { name: 'CreateNewCategory' })
  async createCategory(
    @Args('categoryInput') data: CreateCategoryInput
  ): Promise<Category> {
    const categoryAggregate = CategoryAggregate.create({
      title: data.title
    }).getResult()
    const mapper = new CategoryMapper()

    const ormCategory = mapper.toOrmProps(categoryAggregate)

    return this.categoriesService.create(ormCategory)
  }
}
