// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

// wheel
const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case types.MOVE_CLOCKWISE:
      if(state === 5){
        return 0
      } else {
        return state + 1
      }
      case types.MOVE_COUNTERCLOCKWISE:
        if(state === 0){
          return 5
        } else {
          return state - 1
        }
    default:
      return state
  }
}
// quiz
const initialQuizState = {
  question: "",
  question_id: "",
  answers: [],
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case types.SET_QUIZ_INTO_STATE:
    return {
      ...state,
      question: action.payload.question,
      quiz_id:action.payload.quiz_id,
      answers: action.payload.answers
    }
    case types.RESET_FORM:

      return {
        ...state, 
        question: action.payload.question,
        quiz_id:action.payload.quiz_id,
        answers: action.payload.answers
      }
    default:
      return state
  }
}

const initialSelectedAnswerState = {
  selectedAnswerID:""
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case types.SET_SELECTED_ANSWER:
      return {
        ...state,
        selectedAnswerID: action.payload
      }
    default:
      return state
  }
}

const initialMessageState = {
  message:""
}
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case types.SET_INFO_MESSAGE:
      return {
        message: action.payload
      }
    default:
      return state
  }
}

//form
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case types.INPUT_CHANGE:
      const {id, value} = action.payload
      return {
        ...state,
        [id]: value
      }
      case types.RESET_FORM:
        return initialFormState
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
