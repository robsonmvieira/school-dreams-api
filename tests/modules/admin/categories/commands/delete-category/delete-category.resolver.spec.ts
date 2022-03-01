import { CategoriesService } from '@modules/admin/categories/services'
import { Test, TestingModule } from '@nestjs/testing'
import { DeleteCategoryGraphQlResolver } from '@modules/admin/categories/commands'
import { NotFoundException } from '@core/exceptions'
import { InternalServerErrorException } from '@nestjs/common'

describe('DeleteCategoryGraphQlResolver', () => {
  let resolver: DeleteCategoryGraphQlResolver

  const mockedService = {
    remove: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteCategoryGraphQlResolver,
        {
          provide: CategoriesService,
          useValue: mockedService
        }
      ]
    }).compile()

    resolver = module.get<DeleteCategoryGraphQlResolver>(
      DeleteCategoryGraphQlResolver
    )
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should delete the category with id', async () => {
    const mockResult = {
      id: 'valid_id',
      title: 'any_title',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    mockedService.remove.mockReturnValue(mockResult)
    const result = await resolver.deleteCategory('valid_id')
    expect(result).toEqual(mockResult)
  })

  it('should throw if category not found', async () => {
    mockedService.remove.mockImplementation(() => {
      throw new NotFoundException('Category not found')
    })

    await resolver.deleteCategory('wrong_id').catch((exception) => {
      expect(exception).toBeInstanceOf(NotFoundException)
    })
  })

  it('should throw if delete method throws', async () => {
    mockedService.remove.mockImplementation(() => {
      throw new InternalServerErrorException('Something went wrong.')
    })

    await resolver.deleteCategory('wrong_id').catch((exception) => {
      expect(exception).toBeInstanceOf(InternalServerErrorException)
    })
  })

  it('should throw if NotFoundException if category not found', async () => {
    mockedService.remove.mockImplementation(() => {
      throw new NotFoundException('Category not found')
    })

    await resolver.deleteCategory('invalid_id').catch((exception) => {
      expect(exception).toBeInstanceOf(NotFoundException)
      expect(exception.response).toBe('Category not found')
    })
  })
})
