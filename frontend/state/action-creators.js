import * as types from './action-types'
import axios from 'axios'


// ❗ You don't need to add extra action creators to achieve MVP
//wheel
export function moveClockwise() {
  return{
    type: types.MOVE_CLOCKWISE
  }
 }

export function moveCounterClockwise() {
  return{
    type: types.MOVE_COUNTERCLOCKWISE
  }
 }
//quiz
export function selectAnswer(id) {
  return {
    type: types.SET_SELECTED_ANSWER, 
    payload: id,
  }
 }

export function setMessage(data) {
  
  return { type: types.SET_INFO_MESSAGE, payload: data}
  
 }

export function setQuiz(data) { 
  return { type: types.SET_QUIZ_INTO_STATE, payload: data }
}

//form

export function inputChange({id, value}) { 
  return { type: types.INPUT_CHANGE, payload: {id, value} }
}

export function resetForm(data) {
  return { type: types.RESET_FORM, payload: data }
 }


// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data))
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export function postAnswer(quiz_id, answer_id) {
  // reset selected answer, set the message, and fetch new quiz
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id, answer_id})
    .then(res => {
      dispatch(selectAnswer());
      dispatch(setMessage(res.data.message))
      dispatch(fetchQuiz())
    })
    .catch(err => {
      console.error(err)
    })
  }

}




export function postQuiz(form) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', { question_text: form.newQuestion, true_answer_text: form.newTrueAnswer, false_answer_text:form.newFalseAnswer})
    .then(res => {
      console.log(res.data)
     dispatch(resetForm(res.data))
     dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
    })
    .catch(err => {
      console.error(err)
    })
  }}
  

// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state