import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, setQuiz } from '../state/action-creators'


const Quiz=(props) => {
const {quiz, 
  fetchQuiz,
  setQuiz} = props
  
useEffect(()=>{
    fetchQuiz()
  }, [])

 console.log(quiz)

  
  return (
    <div id="wrapper">
      { 
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2 id={quiz.answer_id}>{quiz.question_text}</h2>

            <div id="quizAnswers">
              <div id={quiz.answer_id} className="answer selected">
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

            <button onClick={setQuiz} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=>st, {fetchQuiz, setQuiz})(Quiz)
