import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

function Message(props) {

  const { awesomeMessage, fetchQuiz } = props
  useEffect(()=>{
    fetchQuiz()
  },[])
  return <div id="message">{awesomeMessage}</div>
}

function GrabbingStorage(state){
  return {
    awesomeMessage: state.infoMessage
  }
}

export default connect(GrabbingStorage, actionCreators)(Message)
