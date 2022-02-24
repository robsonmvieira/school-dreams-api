import { BaseDomainEntity } from './base-domain.entity'
import { UniqueEntityID } from './unique-entity.id'

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity
}

export abstract class Entity<T extends BaseDomainEntity> {
  protected readonly _id: UniqueEntityID
  protected readonly _props: T

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id ? id : new UniqueEntityID()
    this._props = props
  }

  get createdAt(): Date {
    return this._props.createdAt ?? new Date()
  }

  get updatedAt(): Date {
    return this._props.updatedAt ?? new Date()
  }

  get isDeleted(): boolean {
    return this._props.isDeleted ?? false
  }

  get isBlocked(): boolean {
    return this._props.isBlocked ?? false
  }

  get props(): T {
    return this._props
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!isEntity(object)) {
      return false
    }
    return this._id.equals(object._id)
  }
}
