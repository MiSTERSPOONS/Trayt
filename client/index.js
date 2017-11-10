import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import RoutesContainer from './routes'

ReactDOM.render(
  <Provider store={store}>
    <RoutesContainer />
  </Provider>,
  document.getElementById('app')
)
