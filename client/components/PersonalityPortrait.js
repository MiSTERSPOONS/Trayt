import React, { Component } from 'react'
import { connect } from 'react-redux'

class PersonalityPortrait extends Component {
  render() {
    return (
      <div>OTHER COMPONENT WORKS</div>
    )
  }
 }

const mapState = (state) => {
  return {}
}

const PersonalityPortraitContainer = connect(mapState)(PersonalityPortrait)
export default PersonalityPortraitContainer
