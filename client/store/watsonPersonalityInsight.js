'use-strict'

import axios from 'axios'

const GET_PERSONALITY_INSIGHT = 'GET_PERSONALITY_INSIGHT'

const getPersonalityInsight = personalityPortrait => ({ type: GET_PERSONALITY_INSIGHT, personalityPortrait })

export const getPersonalityInsightThunk = content => dispatch => {
  axios.post('/api/pinsights', content)
    .then(res => {
      console.log('THIS RES => ', res)
      dispatch(getPersonalityInsight(res.data))
    })
    .catch(err => console.error(err))
}

export default function (state = [], action) {
  switch (action.type) {
    case GET_PERSONALITY_INSIGHT:
      return [action.personalityPortrait]
    default:
      return state
  }
}
