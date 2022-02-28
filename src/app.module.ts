import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'

import { CoreModule } from '@core/core.module'
import { TeacherModule } from '@modules/teacher/teacher.module'
import { AdminModule } from '@modules/admin/admin.module'
import { ClientModule } from '@modules/client/client.module'
import { ParentsModule } from '@modules/parents/parents.module'
import { StudentModule } from '@modules/student/student.module'
import { GraphQLError } from 'graphql'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: any = {
          message: error?.extensions.exception
        }
        return graphQLFormattedError
      }
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
