'use-strict'

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getPersonalityInsightThunk } from '../store'
import Personalities from './Personalities'

const Main = (props) => {

  return (
    <div id="form-entry">
      <h1>Trayt</h1>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <textarea
          id="content"
          required="required"
          placeholder="Text written by the person whose personality you're interested in..."
          name="content"
        />
        <input
          id="personality-insight-submit"
          type="submit"
          value="Submit Personality Insight"
        />
      </form>
      <div id="portrait-container">
        {
          props.personalityPortraits ?
            <div>
              <h2 id="wordCount">{props.personalityPortraits.word_count} words analyzed</h2>
              <Personalities />
            </div>
            :
            null
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    personalityPortraits: state.watsonPersonalityInsight
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: function (event) {
      event.preventDefault()
      const content = event.target.content.value
      dispatch(getPersonalityInsightThunk(content))
      event.target.content.value = ''
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
