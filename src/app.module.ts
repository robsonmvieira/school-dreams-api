import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { AdminModule } from '@domain/admin/admin.module'
import { ClientModule } from '@domain/client/client.module'
import { CoreModule } from '@domain/core/core.module'
import { ParentsModule } from '@domain/parents/parents.module'
import { StudentModule } from '@domain/student/student.module'
import { TeacherModule } from '@domain/teacher/teacher.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    AdminModule,
    ClientModule,
    CoreModule,
    StudentModule,
    TeacherModule,
    ParentsModule
  ]
})
export class AppModule {}
