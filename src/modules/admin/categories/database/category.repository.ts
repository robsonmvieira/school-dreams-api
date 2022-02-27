import { NotContentException } from '@core/exceptions'
import { ConflictException } from '@core/exceptions/conflict.exception'
import { PrismaService } from '@infra/factories/prisma.connection'
import { Category } from '@modules/admin/categories/entities'
import { Injectable } from '@nestjs/common'
import {
  CategoryQueryProps,
  CategoryRepositoryPort
} from './category.repository.port'

@Injectable()
export class CategoryRepository implements CategoryRepositoryPort {
  constructor(private source: PrismaService) {}

  async queryByTitle(title: string): Promise<Category> {
    const response = await this.source.category.findFirst({ where: { title } })
    if (!response) {
      throw new NotContentException('Not content found')
    }
    return response
  }

  async findMany(): Promise<any[]> {
    return this.source.category.findMany()
  }

  async save(payload: Category): Promise<Category> {
    const categoryExists = await this.queryByTitle(payload.title)

    if (categoryExists) {
      throw new ConflictException('Category name already exists')
    }
    return this.source.category.create({
      data: {
        id: payload.id,
        title: payload.title
      }
    })
  }

  async findOneOrThrow(id: string): Promise<Category> {
    return this.source.category.findFirst({ where: { id } })
  }

  async update(
    id: string,
    updateCategoryInput: CategoryQueryProps
  ): Promise<Category> {
    return this.source.category.update({
      where: { id },
      data: {
        ...updateCategoryInput
      }
    })
  }

  async delete(id: string): Promise<Category> {
    return this.source.category.delete({ where: { id } })
  }
}
