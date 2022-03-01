import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'
import { UpdateCategoryGraphQlResolver } from '@modules/admin/categories/commands'
import { NotFoundException } from '@core/exceptions'

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

  it('should edit category with correct params ', async () => {
    const mockResult = {
      id: 'any_id',
      title: 'new title',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockedService.update.mockImplementation(() => {
      return mockResult
    })
    const result = await resolver.update('valid_id', { title: 'new title' })

    expect(result.title).toEqual('new title')
  })

  it('should throw if NotFoundException if category not found', async () => {
    mockedService.update.mockImplementation(() => {
      throw new NotFoundException('Category not found')
    })

    await resolver
      .update('invalid_id', { title: 'new title' })
      .catch((exception) => {
        expect(exception).toBeInstanceOf(NotFoundException)
        expect(exception.response).toBe('Category not found')
      })
  })
})
