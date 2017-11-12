'use-strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Router } from 'react-router'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import { Main, Personalities } from './components'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={history}>
        <Main/>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const RoutesContainer = connect(mapStateToProps)(Routes)
export default RoutesContainer
