import { Category } from '@modules/admin/categories/entities'
import { FindCategoriesGraphQlResolver } from '@modules/admin/categories/queries'
import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'

describe('FindCategoriesGraphQlResolver', () => {
  let resolver: FindCategoriesGraphQlResolver

  const mockResult: Category[] = [
    {
      id: 'any_id',
      title: 'any_title',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindCategoriesGraphQlResolver,
        {
          provide: CategoriesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockResult)
          }
        }
      ]
    }).compile()

    resolver = module.get<FindCategoriesGraphQlResolver>(
      FindCategoriesGraphQlResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should list categories', async () => {
    const result = await resolver.findAll()
    expect(result).toEqual(mockResult)
  })
})
