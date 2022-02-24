import {
  AggregateRoot,
  UniqueEntityID,
  Result,
  ErrorMessage
} from '@core/based-classes'

export type CategoryAggregateProps = {
  title: string
}

export class CategoryAggregate extends AggregateRoot<CategoryAggregateProps> {
  private static readonly minimalSizeTitleName = 3
  private constructor(props: CategoryAggregateProps, id?: UniqueEntityID) {
    super(props, id)
  }

  get title(): string {
    return this.props.title
  }

  get PlainProps(): string {
    return JSON.stringify(this.props)
  }

  get categoryId(): string | number {
    return this.id.toValue()
  }

  public static create(
    props: CategoryAggregateProps,
    id?: UniqueEntityID
  ): Result<CategoryAggregate> {
    const minSize = this.minLength(this.minimalSizeTitleName, props.title)

    if (!minSize) {
      return Result.fail<CategoryAggregate>(
        ErrorMessage.minimalSizeErrorMessage(
          'Category',
          this.minimalSizeTitleName
        )
      )
    }
    return Result.ok<CategoryAggregate>(new CategoryAggregate(props, id))
  }

  private static minLength(minimalSize: number, title: string): boolean {
    return title.trim().length >= minimalSize
  }
}
