import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { Category } from '@modules/admin/categories/entities'
import { CategoriesService } from '@modules/admin/categories/services'
import { CategoryType } from '@modules/admin/categories/entities'

@Resolver(() => Category)
export class DeleteCategoryGraphQlResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => CategoryType, { name: 'deleteCategory' })
  async deleteCategory(@Args('categoryId') id: string): Promise<Category> {
    return this.categoriesService.remove(id)
  }
}
