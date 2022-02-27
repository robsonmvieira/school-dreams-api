import { Query, Resolver } from '@nestjs/graphql'
import { Category } from '@modules/admin/categories/entities'
import { CategoriesService } from '@modules/admin/categories/services'
import { CategoryType } from '@modules/admin/categories/entities'

@Resolver(() => Category)
export class FindCategoriesGraphQlResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [CategoryType], { name: 'findAllCategories' })
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll()
  }
}
