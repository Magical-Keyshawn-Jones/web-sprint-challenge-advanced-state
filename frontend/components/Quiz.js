import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

function Quiz(props) {

  const { fetchQuiz, loader, errorMessage, testQuiz,selectAnswer2 ,selectAnswer, trueAnswer } = props
  const buttonClass = document.getElementsByClassName('answer')
  const active = 'answer selected'
  const inactive = 'answer'
  let button2Helper = false

  useEffect(()=>{

    fetchQuiz()

  },[])

    function disabledHelper(answer){
      if (answer[0] || answer[1] === true) {
        return false
      } else {return true}
    }

  return (
    <div id="wrapper">
       <>
          <h2>{testQuiz === null ? '' : testQuiz.question}</h2>

          <div id="quizAnswers">
              <div className={trueAnswer[0] === true ? active : inactive}>
                {testQuiz === null ? '' : testQuiz.answer1}
                <button onClick={()=>{selectAnswer()}}>
                  {trueAnswer[0] === true ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={trueAnswer[1] === true ? active : inactive}>
                {testQuiz === null ? '' : testQuiz.answer2}
                <button onClick={()=>{selectAnswer2()}}>
                  {trueAnswer[1] === true ? 'SELECTED' : 'Select'}
                </button>
              </div>
          </div>

          <button id="submitAnswerBtn" disabled={disabledHelper(trueAnswer)}>Submit answer</button>
        </> 
        {loader === false ? '' : <h1>Loading next quiz...</h1>}
        {errorMessage === '' ? '' : <h1>{errorMessage}</h1>}
    </div>
  )
  
}


function GrabbingStorage(state){
  return {
    loader: state.loadingStateReducer,
    errorMessage: state.errorReducer,
    testQuiz: state.quiz,
    trueAnswer: state.selectedAnswer,
  }
}

export default connect(GrabbingStorage,actionCreators)(Quiz)