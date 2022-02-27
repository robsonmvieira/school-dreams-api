import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class CategoryType {
  @Field(() => ID)
  id: string

  @Field(() => Date, { description: 'Created At' })
  createdAt: Date

  @Field(() => Date, { description: 'Update At' })
  updatedAt: Date

  @Field(() => String, { description: 'Category Title' })
  title: string
}
