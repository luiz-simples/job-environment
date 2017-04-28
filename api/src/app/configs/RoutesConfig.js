import log from 'colog'
import moment from 'moment'
import {upperCase} from 'lodash'
import multiparty from 'connect-multiparty'

const maxFieldsSize = '5mb'
const uploadDir = `${process.env.NODE_FILES}/tmp`

export default (server) => {
  const {app, routes, actions, schemas, connect, orm} = server
  const routesMaps = Object.keys(routes).map(key => routes[key])
  const ormSchemas = orm(Object.values(schemas))

  routesMaps.forEach(({verb, path, send, exec}) => {
    const resolveRequest = async (req, res) => {
      res.set('Content-Type', 'application/json')
      const connection = await connect()
      const transaction = await connection.startTransaction()

      try {
        const ormDatabase = ormSchemas(transaction)

        const context = {req, res, exec, actions, transaction, ormDatabase, ...server}
        let result = await actions.execute(context)
        await transaction.commit()
        res.send(result)
        // setTimeout(() => res.send(result), 10000)
      } catch (err) {
        res.statusCode = 400
        const error501 = err instanceof Error
        await transaction.rollback()

        if (error501) {
          log.error('')
          log.error('')
          log.error('')
          log.error('===========================================================')
          log.error(` ${moment().format('DD/MM/YYYY HH:mm:ss')} - Critical error`)
          log.error(`  route..: ${upperCase(verb)} ${path}`)
          log.error(`  body...: ${JSON.stringify(req.body)}`)
          log.error(`  message: ${err.message}`)
          log.error('  trace:')
          console.log(err)
          log.error('===========================================================')
          log.error('')
          log.error('')
          log.error('')

          res.statusCode = 500
          res.json('Erro interno do servidor. Entre em contato com a equipe de tecnologia.')
        } else {
          res.json(err)
        }
      }

      await connection.release()
    }

    app[verb](path, multiparty({uploadDir, maxFieldsSize}), resolveRequest)
  })
}
