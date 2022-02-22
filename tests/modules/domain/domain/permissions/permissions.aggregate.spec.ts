import { PermissionAggregate } from '../../../../../src/modules/domain/admin/permissions/entities'

describe('Permission Aggregate ', () => {
  it('Should create a permission aggregate with correct params', () => {
    const permission = PermissionAggregate.create({ title: 'create_student' })
    expect(permission.isSuccess).toBe(true)
  })

  it('Should returns a error if permission aggregate title less than 5', () => {
    const permission = PermissionAggregate.create({ title: 'crea' })
    expect(permission.isSuccess).toBe(false)
    expect(permission.error).toBe(
      'Permission title must have minimal of 5 letters'
    )
  })
})
