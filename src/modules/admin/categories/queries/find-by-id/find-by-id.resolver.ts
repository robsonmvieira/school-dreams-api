import { Args, Query, Resolver } from '@nestjs/graphql'
import { Category } from '@modules/admin/categories/entities'
import { CategoriesService } from '@modules/admin/categories/services'
import { CategoryType } from '@modules/admin/categories/entities'

@Resolver(() => Category)
export class FindCategoryByIdGraphQlResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => CategoryType, { name: 'findCategoryById' })
  async findByIdOrFail(@Args('data') id: string): Promise<Category> {
    return this.categoriesService.findOneOrThrow(id)
  }
}
