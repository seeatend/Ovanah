import React from 'react'
import styled from 'styled-components';
import { Provider } from 'react-redux'
import { AppRouter } from './Router'
import store from '../state'

const AppContainer = styled.div`
  && {
    width: 90%;
    height: calc(100vh - 40px);
    max-width: 1024px;
    margin: 20px auto;
    position: relative;
  }
`

export const App = () => (
  <Provider store={store}>
    <AppContainer>
      <AppRouter />
    </AppContainer>
  </Provider>
)
