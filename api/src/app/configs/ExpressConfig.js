import bodyParser from 'body-parser'
import compression from 'compression'

export default ({app}) => {
  const limit = '850mb'
  const extended = true
  app.use(compression())
  app.use(bodyParser.json({limit}))
  app.use(bodyParser.urlencoded({limit, extended}))
}
