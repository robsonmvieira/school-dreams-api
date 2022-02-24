import { Inject, Injectable } from '@nestjs/common'
import { Category } from '@modules/admin/categories/entities'
import { CategoryQueryProps, CategoryRepositoryPort } from '../database'

@Injectable()
export class CategoriesApiService {
  constructor(
    @Inject('CategoryRepositoryPort')
    private readonly repo: CategoryRepositoryPort
  ) {}
  async create(createCategoryInput: Category): Promise<Category> {
    return this.repo.save(createCategoryInput)
  }

  async findAll(
    categoryProps: CategoryQueryProps = {} as CategoryQueryProps
  ): Promise<Category[]> {
    return this.repo.findMany(categoryProps)
  }

  async findOne(id: string): Promise<Category> {
    return this.repo.findOneOrThrow(id)
  }

  async update(
    id: string,
    updateCategoryInput: CategoryQueryProps
  ): Promise<Category> {
    return this.repo.update(id, updateCategoryInput)
  }

  async remove(id: string): Promise<Category> {
    return this.repo.delete(id)
  }

  async findByName(title: string): Promise<Category> {
    return this.repo.queryByTitle(title)
  }
}
