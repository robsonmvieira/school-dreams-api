import { Module } from '@nestjs/common'
import { CategoriesResolver } from './categories.resolver'
import { CategoryRepository } from './database'
import { CategoriesApiService, CategoriesService } from './services'

@Module({
  providers: [
    CategoriesResolver,
    CategoriesApiService,
    CategoriesService,
    {
      provide: 'CategoryRepositoryPort',
      useClass: CategoryRepository
    }
  ]
})
export class CategoriesModule {}
