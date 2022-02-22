import { UniqueEntityID } from '../../core/based-classes/unique-entity.id'
import { Entity } from '../../core/based-classes/entity'
import { Result } from '../../core/based-classes/result'

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
