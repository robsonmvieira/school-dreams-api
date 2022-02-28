import { NotFoundException } from '@core/exceptions'
import { FindCategoryByIdGraphQlResolver } from '@modules/admin/categories/queries/find-by-id'
import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'

describe('FindCategoryByTitleGraphQlResolver', () => {
  let resolver: FindCategoryByIdGraphQlResolver

  const mockResult = {
    id: 'valid_id',
    title: 'any_title',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const mockedService = {
    findOneOrThrow: jest.fn().mockReturnValue(mockResult)
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindCategoryByIdGraphQlResolver,
        {
          provide: CategoriesService,
          useValue: mockedService
        }
      ]
    }).compile()

    resolver = module.get<FindCategoryByIdGraphQlResolver>(
      FindCategoryByIdGraphQlResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should find a category by id', async () => {
    const result = await resolver.findByIdOrFail('valid_id')
    expect(result.id).toBe('valid_id')
  })

  it('should return a NotFoundException if category not found with id', async () => {
    mockedService.findOneOrThrow.mockImplementation(() => {
      throw new NotFoundException('Category not Found')
    })
    await resolver.findByIdOrFail('').catch((exception) => {
      expect(exception).toBeInstanceOf(NotFoundException)
      expect(exception).toMatchObject({
        message: 'Category not Found'
      })
    })
  })
})
