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

//set quiz into state
const initialQuizState = {
  question_text:'', 
  true_answer_text:'', 
  false_answer_text:''
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case types.SET_QUIZ_INTO_STATE:
    return {
      ...state,
      question_text: action.payload.question,
      true_answer_text: action.payload.answers[0].text,
      false_answer_text: action.payload.answers[1].text
    }
    
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
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
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
