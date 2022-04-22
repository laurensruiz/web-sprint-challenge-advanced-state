import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, setQuiz, selectAnswer } from '../state/action-creators'


const Quiz =(props) => {
  
  

  const {question, answers, quiz_id, selectedAnswerID,fetchQuiz, setQuiz, selectAnswer, selectedAnswer} = props

  useEffect(()=>{
    fetchQuiz()
  }, [])

  const handleSelectAnswer = (id) => {
    selectAnswer(id);
  }
 
  return (
    <div id="wrapper">
      { 
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !quiz_id ? (
          <>
            <h2>{question}</h2>
            <div id="quizAnswers">
              {
                answers.map( answer =>
                  <div className='answer'>
                    {answer.text}
                  <button onClick={()=> handleSelectAnswer(answer.answer_id)}>
                  {selectedAnswerID === answer.answer_id? 'SELECTED':"Select"}
                </button>
                </div>)
              }
            </div>

            <button disabled={selectedAnswerID !== ""? false: true } onClick ={handlePost}id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStatetoProps = (state) =>{
  return({
    question: state.quiz.question,
    question_id: state.quiz.quiz_id,
    answers: state.quiz.answers,
    selectedAnswerID: state.selectedAnswer.selectedAnswerID
  })
}
export default connect(mapStatetoProps, {fetchQuiz, setQuiz, selectAnswer,})(Quiz)
