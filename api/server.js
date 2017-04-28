import log from 'colog'
import ndcApp from 'nd-conf'
import {createServer} from 'http'

import appModulo from 'app'
import clientesModulo from 'clientes'

const modules = [
  appModulo,
  clientesModulo
]

export default async (app) => {
  const port = 9595
  const {connect, orm} = await app.database()
  const context = {app, port, modules, connect, orm}
  const server = await ndcApp(context)
  const appServer = createServer(server.app)
  appServer.on('close', () => log.headerAnswer('Job Server Stopping!'))

  return new Promise((resolve, reject) => {
    appServer.listen(port, () => {
      log.headerSuccess(`Job Server Started! Running on port ${port}`)
      const fullServer = Object.assign(appServer, server)
      resolve(fullServer)
    })
  })
}
