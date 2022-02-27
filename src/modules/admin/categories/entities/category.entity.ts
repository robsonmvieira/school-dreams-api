import { EntityBase } from '@core/based-classes'

export class Category extends EntityBase {
  title: string

  constructor(data: Partial<Category>) {
    super()
    if (data) {
      Object.assign(this, data)
    }
  }
}
