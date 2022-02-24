import { Entity, UniqueEntityID, Result } from '@core/based-classes'

export class IDValueObject extends Entity<any> {
  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  get id(): UniqueEntityID {
    return this._id
  }

  public static create(id?: UniqueEntityID): Result<IDValueObject> {
    return Result.ok<IDValueObject>(new IDValueObject(id))
  }
}
