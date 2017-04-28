import routes from 'clientes/rotas'
import ClienteSchema from 'clientes/schemas/ClienteSchema'

import DigaOlaConsole from 'clientes/acoes/DigaOlaConsoleAction'
import EnviaObjetoQualquer from 'clientes/acoes/EnviaObjetoQualquerAction'
import ModificaObjetoQualquer from 'clientes/acoes/ModificaObjetoQualquerAction'
import FinalizaObjetoQualquer from 'clientes/acoes/FinalizaObjetoQualquerAction'
import RetornaClienteInserido from 'clientes/acoes/RetornaClienteInseridoAction'

const schemas = {
  ClienteSchema
}

const actions = {
  DigaOlaConsole,
  EnviaObjetoQualquer,
  ModificaObjetoQualquer,
  FinalizaObjetoQualquer,
  RetornaClienteInserido
}

export default {routes, actions, schemas}
