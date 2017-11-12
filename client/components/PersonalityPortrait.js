import React, { Component } from 'react'
import { connect } from 'react-redux'

class PersonalityPortrait extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>PERSONALITY PORTRAIT CONTAINER</h1>
      </div>
    )
  }
}

const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {}
}

const PersonalityPortraitContainer = connect(mapState, mapDispatch)(PersonalityPortrait)
export default PersonalityPortraitContainer
