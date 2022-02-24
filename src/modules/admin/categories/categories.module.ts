import { Module } from '@nestjs/common'
import { CategoriesResolver } from './categories.resolver'
import { CategoriesApiService, CategoriesService } from './services'

@Module({
  providers: [CategoriesResolver, CategoriesApiService, CategoriesService]
})
export class CategoriesModule {}
