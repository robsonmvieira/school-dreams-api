import { Module } from '@nestjs/common'

import { CategoryRepository } from './database'
import { FindCategoriesGraphQlResolver } from '@modules/admin/categories/database/queries'
import { CategoriesApiService, CategoriesService } from './services'
import { PrismaService } from '@infra/factories/prisma.connection'

@Module({
  imports: [],
  providers: [
    PrismaService,
    FindCategoriesGraphQlResolver,
    CategoriesApiService,
    CategoriesService,
    {
      provide: 'CategoryRepositoryPort',
      useClass: CategoryRepository
    }
  ]
})
export class CategoriesModule {}
