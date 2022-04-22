import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Wheel(props) {
 const initialWheelState = ['B','','','','','',]

  const [initialWheel, setInitialWheel] = useState(initialWheelState)

  useEffect(()=>{
    // 5 start counter clockwise
    const classy = document.getElementsByClassName('cog')
    classy[0].classList.add('active')
  },[])

  return (
    <div id="wrapper">
      <div id="wheel">

        {initialWheel.map((letter, index)=>{return <div key={index} className="cog" style={{ "--i": index }}>{letter}</div>})}
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div> */} 
      </div>
      {/* --i is a custom CSS property, no need to touch that nor the style object */}
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

function GrabbingStorage(state){
  return {
    wheel: state.wheel
  }
}

export default connect(GrabbingStorage, {})(Wheel)