export default (conn) => {
  return conn.execute('CREATE EXTENSION citext;')
}
