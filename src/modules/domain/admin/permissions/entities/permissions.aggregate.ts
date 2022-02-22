import {
  AggregateRoot,
  Result,
  UniqueEntityID
} from '../../../core/based-classes'

export type PermissionAggregateType = {
  title: string
}
export class PermissionAggregate extends AggregateRoot<PermissionAggregateType> {
  private static readonly minimalSizeTitleName = 5
  private constructor(props: PermissionAggregateType, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(
    props: PermissionAggregateType,
    id?: UniqueEntityID
  ): Result<PermissionAggregate> {
    const hasCorrectNameSize = this.minLength(
      this.minimalSizeTitleName,
      props.title
    )

    if (!hasCorrectNameSize) {
      return Result.fail<PermissionAggregate>(
        `Permission title must have minimal of ${this.minimalSizeTitleName} letters`
      )
    }
    return Result.ok<PermissionAggregate>(new PermissionAggregate(props, id))
  }

  private static minLength(minimalSize: number, title: string): boolean {
    return title.trim().length >= minimalSize
  }
}