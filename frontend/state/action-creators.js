// ❗ You don't need to add extra action creators to achieve MVP
import { 
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
  SET_SELECTED_ANSWER2,
  SET_SELECTED_ANSWER3,
  SET_QUIZ_INTO_STATE,
  LOADING,
  ERROR,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
 } from "./action-types"
import axios from 'axios';

export function moveClockwise(number) { 
  return {type: MOVE_CLOCKWISE, payload: number}
}

export function moveCounterClockwise(number) {
  return {type: MOVE_COUNTERCLOCKWISE, payload: number}
}

export function selectAnswer(number) {
  return {type: SET_SELECTED_ANSWER, payload: number}
}

export function selectAnswer2(number) {
  return {type: SET_SELECTED_ANSWER2, payload: number}
}

export function selectAnswer3(number) {
  return {type: SET_SELECTED_ANSWER3, payload: number}
}

export function setMessage(message) {
  return {type: SET_INFO_MESSAGE, payload: message}
}

export function setQuiz(data) {
  return {type: SET_QUIZ_INTO_STATE, payload: data}
}

export function loading (){
  return {type: LOADING}
}

export function loadingError(message){
  return {type: ERROR, payload: message}
}

export function inputChange(change) {
  return { type: INPUT_CHANGE, payload: change}
}

export function resetForm() {
  return {type: RESET_FORM}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch(loading())

    axios.get('http://localhost:9000/api/quiz/next')
    .then(res=>{
      dispatch(setQuiz(res.data))
      dispatch(loading())
      dispatch(loadingError(''))
    })
    .catch(err=>{
      // console.log({ err })
      dispatch(loading())
      dispatch(loadingError(err.response.data.error))
    })
  }
}
export function postAnswer(letter) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    dispatch(selectAnswer3())
    
    axios.post('http://localhost:9000/api/quiz/answer', letter)
    .then(res=>{
      dispatch(setMessage(res.data.message))
      dispatch(loading())
    })
    .catch(err=>{
      console.log('error!',{ err })
      dispatch(loading())
      dispatch(loadingError(err.response.data.message))
    })

    axios.get('http://localhost:9000/api/quiz/next')
    .then(res=>{
      dispatch(setQuiz(res.data))
      dispatch(loading())
      dispatch(loadingError(''))
    })
    .catch(err=>{
      console.log('something',{ err })
      dispatch(loading())
      dispatch(loadingError(err.response.data.message))
    })
  }
}
export function postQuiz(letter) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    axios.post('http://localhost:9000/api/quiz/new', letter)
    .then(res=>{
      console.log(res)
      dispatch(resetForm())
    })
    .catch(err=>console.log('error!!!!!', err))
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
