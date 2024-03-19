import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import * as schema from './schema';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DrizzlePGModule.register({
      tag: 'DEV',
      pg: {
        connection: 'client',
        config: {
          connectionString: 'postgres://postgres:@127.0.0.1:5432/drizzle',
        },
      },
      config: {
        schema: {
          ...schema,
        },
      },
    }),
  ],
})
export class DrizzleModule {}
