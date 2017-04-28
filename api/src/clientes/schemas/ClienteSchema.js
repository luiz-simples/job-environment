import {types} from 'q-postgres'

const {
  NAME,
  DATE,
  PRIMARY,
  CPFCNPJ
} = types

export default {
  table: 'persons',

  fields: {
    id: PRIMARY,
    rg: CPFCNPJ,
    cpf: CPFCNPJ,
    nome: NAME,
    nascimento: DATE
  }
}
