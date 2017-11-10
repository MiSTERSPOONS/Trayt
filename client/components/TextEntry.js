'use-strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPersonalityInsightThunk } from '../store'

class TextEntry extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const content = event.target.content.value
    this.props.personality(content)
    event.target.content.value = ''
  }

  render() {
    return (
      <div>
        <h1>Jonathan's Stackathon - Trayt</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <textarea
            id="content"
            required="required"
            placeholder="Text written by the person whose personality you're interested in..."
            name="content">
          </textarea>
          <input type="submit" value="Submit Personality Insight"></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personalityPortrait: state.personalityPortrait
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    personality: function (content) {
      dispatch(getPersonalityInsightThunk(content))
    }
  }
}

const TextEntryContainer = connect(mapStateToProps, mapDispatchToProps)(TextEntry)
export default TextEntryContainer
