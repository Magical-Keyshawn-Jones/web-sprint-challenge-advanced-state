import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

function Quiz(props) {

  const {
    fetchQuiz, 
    loader, 
    errorMessage, 
    testQuiz,selectAnswer2, 
    selectAnswer, 
    trueAnswer,
    postAnswer 
  } = props
  const active = 'answer selected'
  const inactive = 'answer'
  const [quizThing, setQuizThing] = useState(testQuiz)

    function disabledHelper(answer){
      if (answer[0] || answer[1] === true) {
        return false
      } else {return true}
    }

    function onSubmitHandler (e){
      e.preventDefault()
      const quiz = testQuiz.quizId
      const answer1 = testQuiz.answer1Id
      const answer2 = testQuiz.answer2Id
      const bestAnswer = (trueAnswer[0] === true ? answer1 : answer2)
      const postLetter = {
        quiz_id: quiz,
        answer_id: bestAnswer
      }
      postAnswer(postLetter)
    }

    // useEffect(()=>{
    //   fetchQuiz()
    // },[])

    // window.onload = () => {
    //   fetchQuiz()
    // }
  return (
    <div id="wrapper">
        {loader === false ? (
          <>
          <h2>{testQuiz === null ? '' : testQuiz.question}</h2>

          <div id="quizAnswers" onLoad={()=>{fetchQuiz()}}>
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

          <button id="submitAnswerBtn" disabled={disabledHelper(trueAnswer)} onClick={(e)=>{onSubmitHandler(e)}}>Submit answer</button>
        </>
        ) : <h1>Loading next quiz...</h1>}
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