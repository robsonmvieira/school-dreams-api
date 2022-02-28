import { NotContentException } from '@core/exceptions'
import { FindCategoryByTitleGraphQlResolver } from '@modules/admin/categories/queries/find-by-title'
import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'

describe('FindCategoryByTitleGraphQlResolver', () => {
  let resolver: FindCategoryByTitleGraphQlResolver

  const mockResult = {
    id: 'any_id',
    title: 'any_title',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const mockedService = {
    findByName: jest.fn().mockReturnValue(mockResult)
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindCategoryByTitleGraphQlResolver,
        {
          provide: CategoriesService,
          useValue: mockedService
        }
      ]
    }).compile()

    resolver = module.get<FindCategoryByTitleGraphQlResolver>(
      FindCategoryByTitleGraphQlResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should find a category by title', async () => {
    const result = await resolver.findByTitle('any_title')
    expect(result.title).toBe('any_title')
  })

  it('should return a NotContentException if category not found with payload', async () => {
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
