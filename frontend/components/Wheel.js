import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

function Wheel(props) {
  const { wheel, moveClockwise, moveCounterClockwise } = props

  const number = wheel.indexOf('B')

  return (
    <div id="wrapper">
      <div id="wheel">

        <div className={wheel[number] === wheel[0] ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{wheel[0]}</div>
        <div className={wheel[number] === wheel[1] ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{wheel[1]}</div>
        <div className={wheel[number] === wheel[2] ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{wheel[2]}</div>
        <div className={wheel[number] === wheel[3] ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{wheel[3]}</div>
        <div className={wheel[number] === wheel[4] ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{wheel[4]}</div>
        <div className={wheel[number] === wheel[5] ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{wheel[5]}</div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=>{moveCounterClockwise(number)}}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={()=>{moveClockwise(number)}}>Clockwise</button>
      </div>
    </div>
  )
}

function GrabbingStorage(state){
  return {
    wheel: state.wheel
  }
}

export default connect(GrabbingStorage, actionCreators)(Wheel)