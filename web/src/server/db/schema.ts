import { index, mysqlTableCreator } from 'drizzle-orm/mysql-core';

export const createTable = mysqlTableCreator((name) => name);

export const positions = createTable(
  'positions',
  (d) => ({
    id: d.bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    userId: d.varchar('user_id', { length: 256 }).notNull(),
    name: d.varchar('name', { length: 256 }).notNull(),
    wage: d.float('wage').notNull(),
  }),
  (t) => [index('wage_idx').on(t.wage)],
);

export const jobs = createTable(
  'jobs',
  (d) => ({
    id: d.bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    userId: d.varchar('user_id', { length: 256 }).notNull(),
    location: d.varchar('location', { length: 256 }).notNull(),
    event: d.varchar('event', { length: 256 }).notNull(),
    date: d.date('date', { mode: 'date' }).notNull(),
    hours: d.float('hours').notNull(),
    positionId: d
      .bigint('position_id', { mode: 'number' })
      .notNull()
      .references(() => positions.id, { onDelete: 'no action' }),
  }),
  (t) => [index('by_wage_idx').on(t.positionId)],
);

export const userData = createTable('user_data', (d) => ({
  userId: d.varchar('user_id', { length: 256 }).primaryKey(),
  currency: d.varchar('currency', { length: 16 }).notNull(),
  locale: d.varchar('locale', { length: 16 }).notNull(),
  precision: d.int('precision').notNull(),
}));
