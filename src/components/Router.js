import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/home'
import Login from './containers/login'

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} exact />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)