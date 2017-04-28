const PegarListaClientes = {
  verb: 'get',
  path: '/api/clientes',
  exec: [
    'DigaOlaConsole',
    'EnviaObjetoQualquer'
  ]
}

const InserirClientes = {
  verb: 'post',
  path: '/api/clientes',
  exec: [
    'DigaOlaConsole',
    'ModificaObjetoQualquer',
    'RetornaClienteInserido'
  ]
}

export default [
  PegarListaClientes,
  InserirClientes
]
