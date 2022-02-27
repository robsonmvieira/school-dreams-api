import { NotContentException } from '@core/exceptions'
import { FindCategoryByTitleGraphQlResolver } from '@modules/admin/categories/queries/find-by-title'
import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'

describe('FindCategoryByTitleGraphQlResolver', () => {
  let resolver: FindCategoryByIdGraphQlResolver

  const mockResult = {
    id: 'any_id',
    title: 'any_title',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const mockedService = {
    findById: jest.fn().mockReturnValue(mockResult)
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
    const result = await resolver.findById('any_id')
    expect(result.id).toBe('any_id')
  })

  it('should return a NotFoundException if category not found with id', async () => {
    mockedService.findByName.mockImplementation(() => {
      throw new NotContentException('Not content found')
    })
    await resolver.findByTitle('').catch((exception) => {
      expect(exception).toBeInstanceOf(NotContentException)
      expect(exception).toMatchObject({
        message: 'Not content found'
      })
    })
  })
})
