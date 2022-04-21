import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'


const Quiz=(props) => {
const {quiz, fetchQuiz} = props
  
useEffect(()=>{
    fetchQuiz()
  }, [])

 console.log(quiz.question_text)

  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quiz.question_text}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.true_answer_text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.false_answer_text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=>st, {fetchQuiz})(Quiz)
