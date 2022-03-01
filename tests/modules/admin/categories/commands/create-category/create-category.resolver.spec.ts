import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateCategoryGraphQlResolver } from '@modules/admin/categories/commands'
import { ConflictException } from '@core/exceptions/conflict.exception'

describe('CreteCategoryGraphQlResolver', () => {
  let resolver: CreateCategoryGraphQlResolver

  const mockedService = {
    create: jest.fn(),
    findByName: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCategoryGraphQlResolver,
        {
          provide: CategoriesService,
          useValue: mockedService
        }
      ]
    }).compile()

    resolver = module.get<CreateCategoryGraphQlResolver>(
      CreateCategoryGraphQlResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should save new category', async () => {
    const mockResult = {
      id: 'any_id',
      title: 'any_title',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockedService.create.mockReturnValue(mockResult)
    const result = await resolver.createCategory(mockResult)
    expect(result).toEqual(mockResult)
  })

  it('should throw if category title is already exists', async () => {
    const mockResult = {
      id: 'any_id',
      title: 'any_title',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockedService.create.mockReturnValue(mockResult)
    await resolver.createCategory(mockResult)

    await resolver.createCategory(mockResult).catch((exception) => {
      expect(exception).toBeInstanceOf(ConflictException)
    })
  })
})
