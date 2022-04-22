import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, setQuiz, selectAnswer, postAnswer } from '../state/action-creators'


const Quiz =(props) => {
  
  
  const {
    //state
    question, 
    answers, 
    quiz_id, 
    selectedAnswerID, 
    //actions
    fetchQuiz, 
    selectAnswer, 
    postAnswer} = props

  useEffect(()=>{
    fetchQuiz()
  }, [])

  const handleSelectAnswer = (id) => {
    selectAnswer(id);
  }

  
  const handlePost = (quiz_id, answer_id) =>{
    postAnswer(quiz_id, answer_id);
    
    
  }
 
 
  return (
    <div id="wrapper">
      { 
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz_id ? (
          <>
            <h2>{question}</h2>
            <div id="quizAnswers">
              {
                answers.map( answer =>
                  <div className={selectedAnswerID === answer.answer_id? 'answer selected':"answer"}>
                    {answer.text}
                  <button onClick={()=> handleSelectAnswer(answer.answer_id)}>
                  {selectedAnswerID === answer.answer_id? 'SELECTED':"Select"}
                </button>
                </div>)
              }
            </div>

            <button disabled={selectedAnswerID !== ""? false: true } onClick ={() => { handlePost(quiz_id, selectedAnswerID)}}id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStatetoProps = (state) =>{
  return({
    
    question: state.quiz.question,
    quiz_id: state.quiz.quiz_id,
    answers: state.quiz.answers,
    selectedAnswerID: state.selectedAnswer.selectedAnswerID,
    message: state.infoMessage.message
    
  })
}
export default connect(mapStatetoProps, {fetchQuiz, setQuiz, selectAnswer, postAnswer})(Quiz)
