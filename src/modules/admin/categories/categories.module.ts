import { Module } from '@nestjs/common'

import { CategoryRepository } from './database'
import {
  FindCategoriesGraphQlResolver,
  FindCategoryByTitleGraphQlResolver,
  FindCategoryByIdGraphQlResolver
} from '@modules/admin/categories/queries'
import {
  CategoriesApiService,
  CategoriesService
} from '@modules/admin/categories/services'
import { PrismaService } from '@infra/factories/prisma.connection'
import {
  CreateCategoryGraphQlResolver,
  UpdateCategoryGraphQlResolver,
  DeleteCategoryGraphQlResolver
} from '@modules/admin/categories/commands'

@Module({
  imports: [],
  providers: [
    PrismaService,
    FindCategoriesGraphQlResolver,
    FindCategoryByTitleGraphQlResolver,
    FindCategoryByIdGraphQlResolver,
    CreateCategoryGraphQlResolver,
    UpdateCategoryGraphQlResolver,
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
