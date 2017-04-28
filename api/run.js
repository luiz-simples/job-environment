import 'babel-polyfill'
import log from 'colog'
import cluster from 'cluster'
import express from 'express'
import server from './server'
import database, {runMigrations} from 'app/database'
import operationSystem from 'os'

const errorApp = (e) => {
  console.log(e)
  log.headerError(e)
  process.exit()
}

if (cluster.isMaster) {
  runMigrations().then(() => {
    let i

    const numCPUs = operationSystem.cpus().length
    for (i = 0; i < numCPUs; i++) cluster.fork()

    cluster.on('exit', (worker, code, signal) => {
      log.headerError(`worker ${worker.process.pid} died`)
      setTimeout(() => cluster.fork())
    })
  }).catch(errorApp)
}

if (cluster.isWorker) {
  const app = Object.assign(express(), {database})
  server(app).catch(errorApp)
}
