import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {

  const { postQuiz, inputChange, formStuff } = props

  const onChange = evt => {
    const { value, id } = evt.target
        inputChange({id, value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const letter = {
      false_answer_text: formStuff.newFalseAnswer,
      question_text: formStuff.newQuestion,
      true_answer_text: formStuff.newTrueAnswer
    }
    postQuiz(letter)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={formStuff.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={formStuff.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={formStuff.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

function GrabbingStorage(state){
  return {
    formStuff: state.form
  }
}

export default connect(GrabbingStorage, actionCreators)(Form)
