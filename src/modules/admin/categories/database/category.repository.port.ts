import { RepositoryPort } from '@core/ports/repository.ports'
import { Category } from '../entities/category.entity'
export type CategoryQueryProps = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

export interface CategoryRepositoryPort
  extends RepositoryPort<Category, CategoryQueryProps> {
  queryByTitle(title: string): Promise<Category>
}
