'use-strict'

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getPersonalityInsightThunk } from '../store'
import personalityPortraitContainer from './PersonalityPortrait'

const TextEntry = (props) => {
  console.log('PROPS', props)
  return (
    <div>
      <h1>Jonathan's Stackathon - Trayt</h1>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <textarea
          id="content"
          required="required"
          placeholder="Text written by the person whose personality you're interested in..."
          name="content">
        </textarea>
        <input type="submit" value="Submit Personality Insight"></input>
      </form>
      {

        props.personalityPortraits ?
          <div>
            RECEIEVED Personality Portrait
            {
              props.personalityPortraits.personality.map((personalityType, index) => {
                return (
                  <div>
                    <div key={index}>{ personalityType.name }</div>
                    <div>{ Math.floor(personalityType.raw_score * 100) }%</div>
                  </div>
                )
              })
            }
          </div>
          :
          <div>EMPTY (TESTING REMOVE LATER and put NULL</div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('STATE', state)
  return {
    personalityPortraits: state.watsonPersonalityInsight
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: function (event) {
      event.preventDefault()
      console.log('hit handle submit in <TextEntry/> ')
      console.log('What is ownProps? ', ownProps)
      const content = event.target.content.value
      dispatch(getPersonalityInsightThunk(content))
      event.target.content.value = ''
    }
  }
}

const TextEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TextEntry))
export default TextEntryContainer


// 'use-strict'

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

// import { getPersonalityInsightThunk } from '../store'

// class TextEntry extends Component {
//   constructor(props) {
//     super(props)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleSubmit(event) {
//     event.preventDefault()
//     const content = event.target.content.value
//     this.props.personality(content)
//     event.target.content.value = ''
//   }

//   render() {
//     return (
//       <div>
//         <h1>Jonathan's Stackathon - Trayt</h1>
//         <form onSubmit={(event) => this.handleSubmit(event)}>
//           <textarea
//             id="content"
//             required="required"
//             placeholder="Text written by the person whose personality you're interested in..."
//             name="content">
//           </textarea>
//           <input type="submit" value="Submit Personality Insight"></input>
//         </form>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     personalityPortrait: state.personalityPortrait
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     personality: function (content) {
//       dispatch(getPersonalityInsightThunk(content))
//     }
//   }
// }

// const TextEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TextEntry))
// export default TextEntryContainer
