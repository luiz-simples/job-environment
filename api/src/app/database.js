import qPostgres from 'q-postgres'
import migrations from 'app/migrations'

const max = 768
const port = 5432
const host = 'database'
const user = 'job'
const name = 'job'
const password = 'RE7531PH'

const database = (withoutDatabase) => {
  let access = {
    max,
    host,
    user,
    port,
    password,
    idleTimeoutMillis: 3000,
    debug: false // Boolean(process.env.NODE_ENV === 'development')
  }

  if (!withoutDatabase) access.database = name
  return qPostgres(access)
}

export const runMigrations = async () => {
  const {connect, orm} = await database()
  const connection = await connect()
  await migrations(connection, orm)
  return connection.release()
}

export default database
