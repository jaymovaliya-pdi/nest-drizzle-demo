import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgres://postgres:@127.0.0.1:5432/drizzle',
  },
  verbose: true,
  strict: true,
});
