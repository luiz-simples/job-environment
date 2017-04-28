import 'babel-polyfill'

import React from 'react'
import reduxBoot from 'redux-boot'
import routerFlow from 'app/flow/router'

import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory, Router, Route} from 'react-router'

import Main from 'main'
import {authRoutes} from 'auth'

const initialState = {}
const reduxModules = [routerFlow]
const bootApp = reduxBoot(initialState, reduxModules)

bootApp.then(({store}) => {
  const history = syncHistoryWithStore(browserHistory, store)
  // store.subscribe(() => console.log(store.getState()))

  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main}>
          {authRoutes()}
        </Route>
      </Router>
    </Provider>,
  document.getElementById('job-app'))
})
