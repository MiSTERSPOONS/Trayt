import React from 'react'
import { connect } from 'react-redux'

const Personalities = (props) => {
  const { personality } = props.personalityPortraits
  return (
    <table className="table">
      {
        personality.length && personality.map((trait, index) => {
          return (
            <thead key={index}>
              <tr>
                <th className="traitName">{trait.name}</th>
              </tr>
              <tr>
                <td className="traitRawScore">{Math.floor(trait.raw_score * 100)}%</td>
              </tr>
            </thead>
          )
        })
      }
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    personalityPortraits: state.watsonPersonalityInsight
  }
}

export default connect(mapStateToProps)(Personalities)
