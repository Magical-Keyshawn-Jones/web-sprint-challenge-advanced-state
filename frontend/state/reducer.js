// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE,
  LOADING,
  ERROR,
  SET_SELECTED_ANSWER,
  SET_SELECTED_ANSWER2,
  SET_SELECTED_ANSWER3,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
 } from './action-types'

const initialWheelState = ['B','','','','','',]
function wheel(state = initialWheelState, action) {
  const actionNumber = action.payload
  const newWheel = state
    switch(action.type){
      case MOVE_CLOCKWISE:
        switch(newWheel[actionNumber]){
          case newWheel[0]:
            return state = ['','B','','','','',]
            case newWheel[1]:
              return state = ['','','B','','','',]
            case newWheel[2]:
              return state = ['','','','B','','',]
            case newWheel[3]:
              return state = ['','','','','B','',]
            case newWheel[4]:
              return state = ['','','','','','B',]
            case newWheel[5]:
              return state = ['B','','','','','',]
            default: return state
          }
      case MOVE_COUNTERCLOCKWISE:
        switch(newWheel[actionNumber]){
          case newWheel[0]:
            return state = ['','','','','','B',]
            case newWheel[1]:
              return state = ['B','','','','','',]
            case newWheel[2]:
              return state = ['','B','','','','',]
            case newWheel[3]:
              return state = ['','','B','','','',]
            case newWheel[4]:
              return state = ['','','','B','','',]
            case newWheel[5]:
              return state = ['','','','','B','',]
            default: return state
          }
    }
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE:
      return state = {
        question: action.payload.question,
        quizId: action.payload.quiz_id,
        answer1: action.payload.answers[0].text,
        answer1Id: action.payload.answers[0].answer_id,
        answer2: action.payload.answers[1].text,
        answer2Id: action.payload.answers[1].answer_id
      }
    default: 
      return state
    }
}

const load = false
function loadingStateReducer(state = load, action){
  switch(action.type){
    case LOADING:
      return !state
    default: 
      return state
  }
} 

const loadError = ''
function errorReducer(state = loadError, action){
  switch(action.type){
    case ERROR:
      return action.payload
    default:
      return state
  }
}

const initialSelectedAnswerState = false
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return state = [true, false]
    case SET_SELECTED_ANSWER2:
      return state = [false, true]
    case SET_SELECTED_ANSWER3:
      return state = [false, false]
    default: 
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return state = action.payload
    default: 
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return state = {...state, [action.payload.id]: action.payload.value}
    case RESET_FORM:
      return state = initialFormState
    default: 
      return state
  }  
}

export default combineReducers({ 
  wheel, 
  quiz, 
  selectedAnswer, 
  infoMessage, 
  form, 
  loadingStateReducer,
  errorReducer,
 })