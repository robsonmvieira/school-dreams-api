import { Module } from '@nestjs/common'
import { CategoriesModule } from './categories/categories.module'
import { PermissionsModule } from './permissions/permissions.module'
import { RolesModule } from './roles/roles.module'

@Module({
  providers: [],
  imports: [CategoriesModule, PermissionsModule, RolesModule]
})
export class AdminModule {}
