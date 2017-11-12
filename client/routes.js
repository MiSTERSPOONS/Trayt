'use-strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Router } from 'react-router'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import { TextEntryContainer, PersonalityPortraitContainer } from './components'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={history}>
        <TextEntryContainer>
          <Switch>
            <Route path="/" component={PersonalityPortraitContainer} />
          </Switch>
        </TextEntryContainer>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const RoutesContainer = connect(mapStateToProps)(Routes)
export default RoutesContainer

// <Route exact path="/lala" component={PersonalityPortraitContainer} />