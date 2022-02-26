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
    return this.source.category.findFirst({ where: { title } })
  }

  async findMany(): Promise<any[]> {
    return this.source.category.findMany()
  }

  async save(payload: Category): Promise<Category> {
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

  async findByName(title: string): Promise<Category> {
    return this.source.category.findFirst({ where: { title } })
  }
}
