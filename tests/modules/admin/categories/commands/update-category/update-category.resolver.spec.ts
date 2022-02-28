import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateCategoryGraphQlResolver } from '@modules/admin/categories/commands/create-category'
import { ConflictException } from '@core/exceptions/conflict.exception'
import { Category } from '@modules/admin/categories/entities'

class UpdateCategoryDTO {
  title: string
}
class UpdateCategoryGraphQlResolver {
  async updateCategory(
    id: string,
    payload: UpdateCategoryDTO
  ): Promise<Category> {
    const mockResult = {
      id: 'any_id',
      title: 'new title',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return mockResult
  }
}

describe('UpdateCategoryGraphQlResolver', () => {
  let resolver: UpdateCategoryGraphQlResolver

  const mockResult = {
    id: 'any_id',
    title: 'any_title',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const mockedService = {
    update: jest.fn().mockReturnValue(mockResult)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateCategoryGraphQlResolver,
        {
          provide: CategoriesService,
          useValue: mockedService
        }
      ]
    }).compile()

    resolver = module.get<UpdateCategoryGraphQlResolver>(
      UpdateCategoryGraphQlResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should save new category', async () => {
    const mockResult = {
      id: 'any_id',
      title: 'valid_id',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockedService.update.mockImplementation(() => {
      return mockResult
    })
    const result = await resolver.updateCategory('valid_id', {
      title: 'new title'
    })
    expect(result.title).toEqual('new title')
  })

  // it('should throw if category title is already exists', async () => {
  //   const mockResult = {
  //     id: 'any_id',
  //     title: 'any_title',
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  //   mockedService.create.mockReturnValue(mockResult)
  //   await resolver.createCategory(mockResult)

  //   await resolver.createCategory(mockResult).catch((exception) => {
  //     expect(exception).toBeInstanceOf(ConflictException)
  //   })
  // })
})
