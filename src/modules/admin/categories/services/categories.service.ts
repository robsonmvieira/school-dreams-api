import { Injectable } from '@nestjs/common'
import { Category } from '@modules/admin/categories/entities'
import { CategoriesApiService } from './categories.api.service'
import { CategoryQueryProps } from '../database'

@Injectable()
export class CategoriesService {
  constructor(private categoryService: CategoriesApiService) {}

  async create(createCategoryInput: Category): Promise<Category> {
    return this.categoryService.create(createCategoryInput)
  }

  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  async findOneOrThrow(id: string): Promise<Category> {
    return this.categoryService.findOne(id)
  }

  async update(
    id: string,
    updateCategoryInput: CategoryQueryProps
  ): Promise<Category> {
    return this.categoryService.update(id, updateCategoryInput)
  }

  async findByName(title: string): Promise<Category> {
    return this.categoryService.findByName(title)
  }

  async remove(id: string): Promise<Category> {
    return this.categoryService.remove(id)
  }
}
