import React from 'react'
import {Route} from 'react-router'
import LoginPage from 'auth/pages/LoginPage'
import {ROUTE_AUTH_LOGIN} from 'auth/constants'

export const authRoutes = () => ([
  <Route
    key={ROUTE_AUTH_LOGIN}
    path={ROUTE_AUTH_LOGIN}
    component={LoginPage}
  />
])
