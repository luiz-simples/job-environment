import moment from 'moment'
import {types, genSQL} from 'q-postgres'
import allScripts from './scripts/all'

const {createTable} = genSQL
const {
  NAME,
  PRIMARY,
  INTEGER,
  DATETIME
} = types

const getLastMigration = async (conn) => {
  await conn.startTransaction()
  const sqlCreateTableMigrations = createTable('migrations')
    .column('id', PRIMARY)
    .column('batch', INTEGER)
    .column('filename', NAME)
    .column('datetime', DATETIME)
    .toSQL().replace('CREATE TABLE', 'CREATE TABLE IF NOT EXISTS')

  await conn.execute(sqlCreateTableMigrations)

  const {rows} = await conn.execute(`
    SELECT migrations.filename, migrations.batch
    FROM migrations
    ORDER BY migrations.id DESC
    LIMIT 1
  `)

  await conn.commit()

  const lastMigration = rows.pop()
  return !lastMigration ? {filename: '', batch: 0} : lastMigration
}

const executeScript = async (connection, batch, {run, file}, orm) => {
  await connection.startTransaction()
  await run(connection, orm)
  await connection.execute(`INSERT INTO migrations (filename, batch, datetime) VALUES('${file}', ${batch}, '${moment().format('YYYY-MM-DD HH:mm:ss')}');`)
  await connection.commit()
}

export default async (connection, orm) => {
  const {filename, batch} = await getLastMigration(connection)
  let executeScripts = new Promise(resolve => resolve())

  allScripts.forEach((migration) => {
    const {file} = migration
    if (file <= filename) return
    executeScripts = executeScripts.then(executeScript.bind(this, connection, batch + 1, migration, orm))
  })

  return executeScripts.then(() => connection)
}
