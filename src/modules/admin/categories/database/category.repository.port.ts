import { RepositoryPort } from '@core/ports/repository.ports'
import { Category } from '../entities/category.entity'
export type CategoryQueryProps = {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
}

export interface CategoryRepositoryPort
  extends RepositoryPort<Category, CategoryQueryProps> {
  queryByTitle(title: string): Promise<Category>
}
