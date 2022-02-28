import { Module } from '@nestjs/common'

import { CategoryRepository } from './database'
import { FindCategoriesGraphQlResolver } from '@modules/admin/categories/queries/find-categories'
import { FindCategoryByTitleGraphQlResolver } from '@modules/admin/categories/queries/find-by-title'
import { FindCategoryByIdGraphQlResolver } from '@modules/admin/categories/queries/find-by-id'
import {
  CategoriesApiService,
  CategoriesService
} from '@modules/admin/categories/services'
import { PrismaService } from '@infra/factories/prisma.connection'
import { CreateCategoryGraphQlResolver } from '@modules/admin/categories/commands/create-category'
import { DeleteCategoryGraphQlResolver } from '@modules/admin/categories/commands/delete-category'

@Module({
  imports: [],
  providers: [
    PrismaService,
    FindCategoriesGraphQlResolver,
    FindCategoryByTitleGraphQlResolver,
    FindCategoryByIdGraphQlResolver,
    CreateCategoryGraphQlResolver,
    CategoriesApiService,
    CategoriesService,
    DeleteCategoryGraphQlResolver,
    {
      provide: 'CategoryRepositoryPort',
      useClass: CategoryRepository
    }
  ]
})
export class CategoriesModule {}
