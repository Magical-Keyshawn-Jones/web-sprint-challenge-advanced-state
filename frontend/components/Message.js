import React from 'react'
import { connect } from 'react-redux'

function Message(props) {

  const { awesomeMessage } = props
  return <div id="message">{awesomeMessage}</div>
}

function GrabbingStorage(state){
  return {
    awesomeMessage: state.infoMessage
  }
}

export default connect(GrabbingStorage)(Message)
