import {
  UniqueEntityID,
  AggregateRoot,
  Result,
  ErrorMessage
} from '../../../core/based-classes'

export type CategoryAgregateProps = {
  title: string
}

export class CategoryAggregate extends AggregateRoot<CategoryAgregateProps> {
  private static readonly minimalSizeTitleName = 3
  private constructor(props: CategoryAgregateProps, id?: UniqueEntityID) {
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
    props: CategoryAgregateProps,
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
