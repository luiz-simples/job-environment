import {types, genSQL} from 'q-postgres'

const {
  DATE,
  NAME,
  CPFCNPJ,
  PRIMARY,
  NOT_NULL
} = types

const {createTable} = genSQL

export default (conn) => {
  const sqlCreateTableClientes = createTable('clientes')
    .column('id', PRIMARY)
    .column('nome', NAME, NOT_NULL)
    .column('nascimento', DATE)
    .column('cpf', CPFCNPJ)
    .column('rg', CPFCNPJ)
    .unique('cpf')
    .toSQL()

  return conn.execute(sqlCreateTableClientes)
}
