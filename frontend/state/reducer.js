// ❗ You don't need to add extra reducers to achieve MVP
import React from 'react';
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

const initialWheelState = ['B','','','','','',]
function wheel(state = initialWheelState, action) {
  const bSelector = document.getElementsByClassName('cog')
  const actionNumber = action.payload
  const newWheel = state
    switch(action.type){
      case MOVE_CLOCKWISE:
        // bSelector[actionNumber].classList.toggle('active')
        // bSelector[actionNumber + 1].classList.toggle('active')
        // return state = ['','B','','','','',]
        switch(newWheel[actionNumber]){
          case newWheel[0]:
            bSelector[actionNumber].classList.toggle('active')
            bSelector[1].classList.toggle('active')
            return state = ['','B','','','','',]
            case newWheel[1]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[2].classList.toggle('active')
              return state = ['','','B','','','',]
            case newWheel[2]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[3].classList.toggle('active')
              return state = ['','','','B','','',]
            case newWheel[3]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[4].classList.toggle('active')
              return state = ['','','','','B','',]
            case newWheel[4]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[5].classList.toggle('active')
              return state = ['','','','','','B',]
            case newWheel[5]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[0].classList.toggle('active')
              return state = ['B','','','','','',]
          }
          break;
      case MOVE_COUNTERCLOCKWISE:
        switch(newWheel[actionNumber]){
          case newWheel[0]:
            bSelector[actionNumber].classList.toggle('active')
            bSelector[5].classList.toggle('active')
            return state = ['','','','','','B',]
            case newWheel[1]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[0].classList.toggle('active')
              return state = ['B','','','','','',]
            case newWheel[2]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[1].classList.toggle('active')
              return state = ['','B','','','','',]
            case newWheel[3]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[2].classList.toggle('active')
              return state = ['','','B','','','',]
            case newWheel[4]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[3].classList.toggle('active')
              return state = ['','','','B','','',]
            case newWheel[5]:
              bSelector[actionNumber].classList.toggle('active')
              bSelector[4].classList.toggle('active')
              return state = ['','','','','B','',]
          }
    }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

// switch(newWheel[action.payload]){
//   case newWheel[0]:
//     newWheel[0] = ''
//     bSelector[0].classList.toggle('B')
//     newWheel[5] = 'B'
//     bSelector[5].classList.toggle('B')
//   break;
//   case newWheel[1]:
//     newWheel[1]=''
//     bSelector[1].classList.toggle('active')
//     newWheel[0]='B'
//     bSelector[0].classList.toggle('B')
//   break;
//   case newWheel[2]:
//     newWheel[2]=''
//     bSelector[2].classList.toggle('active')
//     newWheel[1]='B'
//     bSelector[1].classList.toggle('active')
//   break;
//   case newWheel[3]:
//     newWheel[3]=''
//     bSelector[3].classList.toggle('active')
//     newWheel[2]='B'
//     bSelector[2].classList.toggle('active')
//   break;
//   case newWheel[4]:
//     newWheel[4]=''
//     bSelector[4].classList.toggle('active')
//     newWheel[3]=''
//     bSelector[3].classList.toggle('active')
//   break;
//   case newWheel[5]:
//     newWheel[5]=''
//     bSelector[5].classList.toggle('active')
//     newWheel[4]=''
//     bSelector[4].classList.toggle('active')
// }

// console.log('yup')
// return state.map((letter, index)=>{
//   if (letter[index] === letter[actionNumber + 1]){
//     <div key={index} className="cog active" style={{ "--i": index}}>B</div>
//   } 
//   else {<div key={index} className="cog" style={{ "--i": index }}></div> }
// })
