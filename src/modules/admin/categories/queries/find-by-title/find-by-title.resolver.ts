import { Args, Query, Resolver } from '@nestjs/graphql'
import { Category } from '@modules/admin/categories/entities'
import { CategoriesService } from '@modules/admin/categories/services'
import { CategoryType } from '@modules/admin/categories/entities'

@Resolver(() => Category)
export class FindCategoryByTitleGraphQlResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => CategoryType, { name: 'findCategoryByTitle' })
  async findByTitle(@Args('data') name: string): Promise<Category> {
    return this.categoriesService.findByName(name)
  }
}
